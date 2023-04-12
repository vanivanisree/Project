import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from '../train';
import { TraindataService } from '../traindata.service';


@Component({
  selector: 'app-addtrains',
  templateUrl: './addtrains.component.html',
  styleUrls: ['./addtrains.component.css']
})
export class AddtrainsComponent implements OnInit {

 
  train : Train = new Train();
  message:any;

  constructor(private service: TraindataService, private router: Router) { }

  ngOnInit(): void {
  }

  saveTrain() {
    this.service.addNewTrain(this.train).subscribe( data => {
      console.log(data);
      
    });
    alert("Train Added Successfully");
    this.router.navigate(['/managetrains']);
  }

  addTrain() {
      console.log(this.train);
      this.saveTrain();
  }

}
