import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
  constructor(private formBuilder: FormBuilder, private router: Router) {
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
  checkUserValid() {
    console.log(this.resetPasswordForm.value);
    this.canUserReset = true;
  }
  validatePasswords(values: {
    userName: string;
    maidenName: string;
    password: string;
    reenterPassword: string;
  }) {
    if (values?.password.length < 8 || values?.reenterPassword.length < 8) {
      this.error = 'Passwords must atleast be 8 characters';
    } else if (values?.password !== values?.reenterPassword) {
      this.error = 'Passwords do not match';
    } else {
      this.passwordsMatch = true;
      this.error = '';
    }
  }
  savePassword() {
    console.log('saved');
  }
}
