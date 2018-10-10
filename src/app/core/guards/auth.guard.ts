import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate() {
    try {
      // tslint:disable-next-line:no-debugger
      debugger;
      const isAuthenticated = await this.authService.isLoggedin();
        if (isAuthenticated) {
        return isAuthenticated;
      }
    } catch (err) {
      this.router.navigate(['auth/login']);
    }
  }
}
