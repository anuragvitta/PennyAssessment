import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'assessment-penny-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  hide = true;
  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      userName: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      maidenName: [null, Validators.required],
    });
  }

  ngOnInit(): void {}
  createAccount() {
    console.log(this.signUpForm.value);
  }
}
