import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Login } from '../../shared/interfaces/auth.interface';
import { Router } from '@angular/router';
import { SessionStorageService } from '../../core/services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private sessionStorageService: SessionStorageService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder
      .group({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit(form: Login) {
    this.authService.login(form)
      .subscribe(resp => {
        this.sessionStorageService.setObject('isLoggedin', form.username);
        this.router.navigate(['dashboard/home']);
      }, (error => {
        alert('login failed');
      }));
  }

}
