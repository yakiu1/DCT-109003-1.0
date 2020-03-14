import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['a3000032000@hotmail.com', [Validators.required, Validators.email]],
      password: ['0988888888', [Validators.minLength(6), Validators.maxLength(15), Validators.required]],
      isRemember: [true]
    });
  }

  doSubmit() {

  }
}
