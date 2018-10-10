import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthComponent implements OnInit {
  // signUp = 'signup';
  // verifyAccount = 'verify';
  // signUpFlag = false;
  // verifyFlag = false;

  constructor(public router: Router) {}

  ngOnInit() {}

  // changeRoute() {
  //   this.signUpFlag = this.router.url.includes(this.signUp);
  //   this.verifyFlag = this.router.url.includes(this.verifyAccount);
  // }
}
