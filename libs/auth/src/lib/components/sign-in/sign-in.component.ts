import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'assessment-penny-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.signInForm = this.formBuilder.group({
      userName: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}
  signInUser() {
    console.log(this.signInForm.value);
    this.authService.updateLocalStorage({
      userName: this.signInForm.value.userName,
      loggedInAt: new Date(),
    });
  }
  forgotPassword() {
    this.router.navigate(['forgot-password']);
  }
}
