import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from '../core/services/auth.service';
import { LoginGuard } from '../core/guards/login.guard';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, FormsModule],
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  providers: [AuthService, LoginGuard],
})
export class AuthModule {}
