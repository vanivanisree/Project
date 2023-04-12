import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterpassengerService } from '../registerpassenger.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  unamePattern = "^[a-z0-9_]{4,15}$";
  upasswordPattern ="^[a-z0-9_]{6,15}";
  adminlog!:FormGroup
  constructor(private httpClientService:RegisterpassengerService,private router:Router,private formBuilder:FormBuilder){}
ngOnInit(): void {
  
  this.adminlog = this.formBuilder.group({
    username: new FormControl('',Validators.compose([Validators.required,Validators.pattern(this.unamePattern)])),
    password:new FormControl('',Validators.compose([Validators.required,Validators.pattern(this.upasswordPattern)])),
    Confirmpassword:new FormControl('',Validators.required),
  },
  {
    validators:this.MustMatch('password','Confirmpassword')
  }
  )
}
//   adminlog=new FormGroup(
//     {
//         id: new FormControl('',Validators.required),
//         username: new FormControl('', Validators.required),
//         password: new FormControl('', Validators.required)
//     })
//     constructor(private httpClientService: RegisterpassengerService, private router:Router, private fb:FormBuilder) { }
  
//     ngOnInit(): void {
//     }
//     validate()
//     {
//       //console.warn(this.addResto.value)
//       this.httpClientService.regUser(this.adminlog.value).subscribe((result: any)=>{
//       console.warn("result",result);
//       if(result.success==0) {
//         alert("Username already Existed, Try different one");
//         (<any>this.router).navigate(["/userreg"]);
//       }
//       else {
//       alert("Registration Successful");
//       (<any>this.router).navigate(["/userLogin"]); 
//       }
//     })
//     }
 get f(){
  return this.adminlog.controls;
 }
  
   MustMatch(controlName: string, matchingControlName: string){
    return(formGroup:FormGroup)=>{
      const control=formGroup.controls[controlName];
      const matchingcontrol=formGroup.controls[matchingControlName];
      if(matchingcontrol.errors && !matchingcontrol.errors['MustMatch']){
        return;

      }
      if(control.value!== matchingcontrol.value){
        matchingcontrol.setErrors({MustMatch:true});
      }
      else{
        matchingcontrol.setErrors(null);
      }
    }
   }
   validate()
   {
    this.httpClientService.regUser(this.adminlog.value).subscribe((result: any)=>{
      console.warn("result",result);
      if(result.sucess==0){
        alert("Username already Existed, Try differnt one");
        (<any>this.router).navigate(["/userreg"]);
      }
      else{
        (<any>this.router).navigate(["/userLogin"]);
      }
    })
   }

 }
