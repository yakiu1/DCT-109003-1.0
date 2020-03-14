import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormGroupDirective, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  form: FormGroup;
  twoAtValidator(control: AbstractControl): ValidationErrors {

    if (control.value.toString().split('@').length - 1 === 2) {
      console.log(control.value.toString().split('@').length);
      return null;
    } else {
      return {
        twoAt: false
      }
    }
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['a3000032000@hotmail.com', [Validators.required, Validators.email]],
      password: ['0988888888', [Validators.minLength(6), Validators.maxLength(15), Validators.required, this.twoAtValidator]],
      isRemember: [true]
    });
  }

  doSubmit(hoho: FormGroupDirective) {

  }
}
