import { Component, OnInit } from '@angular/core';
//validators imports 
import { Validators } from '@angular/forms';
//reactive form imports 
import { FormControl, FormGroup } from '@angular/forms';
//Importing the service to make use of the fuctions and methods 
import {UserDataReceiveService} from '../user-data-receive.service'

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})
export class UserReactiveFormComponent implements OnInit {

  form!: FormGroup;
  univD:any = [];
  constructor(private univInsta:UserDataReceiveService) { }

  ngOnInit(): void {
 //reactive form elements and the validators
    this.form = new FormGroup({
      Fname : new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*$")]),
      Lname : new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*$")]),
      Age : new FormControl('',[Validators.required,Validators.pattern("^[1-9]\d*$"),Validators.maxLength(3)]),
      Email : new FormControl('',[Validators.email,Validators.required]),
      Password : new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[0-9])[a-zA-Z0-9]+$')])
    });
    //functions inside the onint fuctions will be called when the page is loaded 
  
    this.univList();
  }
  submitfunc(){

    console.log("onSubmit function called ",this.form);
  }
  
  //calling the methods and storing university list to the variable 
  
  univList(){
    this.univInsta.univData().subscribe(unirece=>{
      this.univD=unirece;
      console.warn(this.univD);
    })
  }



}
