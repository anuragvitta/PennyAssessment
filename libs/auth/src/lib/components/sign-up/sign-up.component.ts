import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthHttpService } from '../../services/auth-http.service';

@Component({
  selector: 'assessment-penny-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private authHttpService: AuthHttpService,
    private router: Router
  ) {
    this.signUpForm = this.formBuilder.group({
      userName: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      maidenName: [null, Validators.required],
    });
  }

  ngOnInit(): void {}
  createAccount() {
    this.authHttpService.signUpUser(this.signUpForm.value).subscribe(
      (data) => {
        alert(`User ${data.userName} created sucessfully,Please sign in`);
        this.router.navigate(['sign-in']);
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
}
