import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminloginService } from '../adminlogin.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  x: any;

  adminlog=new FormGroup(
    {
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
        
    })
    constructor(private httpClientService: AdminloginService,private router:Router) { }
  
    ngOnInit(): void {
    }
    
    validate() {
      this.httpClientService.authent(this.adminlog.value.username, this.adminlog.value.password);
    }

  }