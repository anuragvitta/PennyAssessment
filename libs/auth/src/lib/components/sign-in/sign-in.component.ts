import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthHttpService } from '../../services/auth-http.service';
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
    private authService: AuthService,
    private authHttpService: AuthHttpService
  ) {
    this.signInForm = this.formBuilder.group({
      userName: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}
  signInUser() {
    this.authHttpService.validateUser(this.signInForm.value).subscribe(
      (data) => {
        this.authService.updateLocalStorage(data.access_token);
        this.router.navigate(['']);
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
  forgotPassword() {
    this.router.navigate(['forgot-password']);
  }
}
