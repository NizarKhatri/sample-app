import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { PasswordValidation } from './password-validation.component';
import { AuthService } from '../../core/services/auth.service';
import { Signup } from '../../shared/interfaces/auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder
      .group({
        fullname: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
      }, {
          validator: PasswordValidation.MatchPassword
        });
  }

  get fullname() { return this.signupForm.get('fullname'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }

  onSubmit(form: Signup) {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.authService.register(form)
      .subscribe(resp => {
        this.signupForm.reset();
        alert('submitted successfully');
        this.router.navigate(['auth/login']);

      }, (error => {
        console.log(error);
        alert('register failed');
      }));
  }

}
