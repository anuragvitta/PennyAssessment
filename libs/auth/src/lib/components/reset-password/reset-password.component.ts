import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthHttpService } from '../../services/auth-http.service';

@Component({
  selector: 'assessment-penny-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  hide = true;
  canUserReset = false;
  error = '';
  passwordsMatch = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authHttpService: AuthHttpService
  ) {
    this.resetPasswordForm = this.formBuilder.group({
      userName: [null, Validators.required],
      maidenName: [null, [Validators.required]],
      password: [''],
      reenterPassword: [''],
    });
  }

  ngOnInit(): void {
    this.resetPasswordForm.valueChanges.subscribe((values) => {
      if (this.canUserReset) this.validatePasswords(values);
    });
  }
  checkUserValidity() {
    this.authHttpService
      .getUser(this.resetPasswordForm.value.userName)
      .subscribe(
        (data) => {
          if (data.maidenName === this.resetPasswordForm.value.maidenName) {
            this.canUserReset = true;
          } else {
            alert('Maiden name did not match with user, try again');
            this.resetPasswordForm.reset();
          }
        },
        (error) => {
          alert(error.error.message);
        }
      );
  }
  validatePasswords(values: {
    userName: string;
    maidenName: string;
    password: string;
    reenterPassword: string;
  }) {
    if (values?.password?.length < 8 || values?.reenterPassword?.length < 8) {
      this.error = 'Passwords must atleast be 8 characters';
    } else if (values?.password !== values?.reenterPassword) {
      this.error = 'Passwords do not match';
    } else {
      this.passwordsMatch = true;
      this.error = '';
    }
  }
  savePassword() {
    const { reenterPassword, ...userData } = this.resetPasswordForm.value;
    this.authHttpService.updateUser(userData).subscribe(
      (data) => {
        alert(
          `User ${data.userName} password updated sucessfully,Please sign in`
        );
        this.router.navigate(['sign-in']);
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
}
