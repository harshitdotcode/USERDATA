import { Component, OnInit, ViewChild } from '@angular/core';
//@viewchild is impotred

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-template-form',
  templateUrl: './user-template-form.component.html',
  styleUrls: ['./user-template-form.component.css']
})
export class UserTemplateFormComponent implements OnInit {

 @ViewChild('f') formRef:NgForm | undefined
 //@ViewChild is ued to acess the local refence in our TypeScript code 
 //which is in our case is #f,now we don't need to pass the refence to the onSubmit method which
 //in previous method we were send f 
 
 //@ViewChild is ued to acess the local refence in our TypeScript code 
 //which is in our case is #f,now we don't need to pass the refence to the onSubmit method which
 //in previous method we were send f 


  constructor() { }

  ngOnInit(): void {
//   }
//  this code will get the whole form to the console, NgForm is an object here,
//  this ths used to acess torm with the help of local reference can also be done 
//  with the help of @viewChild 
//   onSubmit(form:NgForm){
//     console.log(form);
  }
  onSubmit(){
  console.log(this.formRef);
  }

}


// note:
// 1> other way to access the form is with the help of @viewchile 
// as we have the local form reference 