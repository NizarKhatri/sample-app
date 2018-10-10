import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

// Services
import { SessionStorageService } from './services/session-storage.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './interceptors/auth-interceptor';

// import { AuthInterceptor } from './interceptors/auth-interceptor';

@NgModule({
  imports: [CommonModule],
  providers: [
    SessionStorageService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  declarations: [],
  // exports: [LoadingBarHttpClientModule],
})
export class CoreModule {}
