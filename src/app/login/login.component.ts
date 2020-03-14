import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'cluster';
import { NgForm } from '@angular/forms';

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
}
