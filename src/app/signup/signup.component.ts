import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(public formBuilder: FormBuilder){}

  public userForm = this.formBuilder.group({
    username: [''],
    email: [''],
    password: [''],
    c_password: ['']
  })
  regUser(){
    this.userForm.controls['username'].setValue("Danitified")
    console.log(this.userForm.value);
  }
}
