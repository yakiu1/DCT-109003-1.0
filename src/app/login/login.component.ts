import { Component, OnInit, NgModule } from '@angular/core';
import { getMaxListeners } from 'cluster';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = {
    email: 'hansonhung50@gmail.com',
    password: '131231',
    isRemember: true
  };
  constructor() { }

  ngOnInit(): void {
  }


  doSubmit(form: NgForm) {
    if (form.valid) {

    }
  }

  isFieldValid(control: NgModel) {
    console.log(control.formDirective);
    return control.formDirective.submited && control.invalid;
  }
}
