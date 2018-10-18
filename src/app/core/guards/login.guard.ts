import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  async canActivate() {
    try {
      // tslint:disable-next-line:no-debugger
      debugger;
      const isAuthenticated = await this.authService.isLoggedin();
        if (isAuthenticated) {
          this.router.navigate(['dashboard/home']);
          return false;
      }
    } catch (err) {
        return true;
    }
  }
}
