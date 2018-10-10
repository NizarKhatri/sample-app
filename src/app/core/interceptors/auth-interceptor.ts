import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { flatMap, tap } from 'rxjs/operators';

import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

// Constants
import { AppConstants } from '../constant';

// Services
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private baseUrl = AppConstants.apiBase;
  headers: HttpHeaders;
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // This is to check if bypass is requested for an api call
    // When bypass is requested, the token will not be set and also the request url is not modified for that request
    // The header 'Bypass-Auth' is for internal project use only and is removed before sending
    const bypassInterceptor: boolean = req.headers.has('Bypass-Auth');
    const IncludeAccessKey: boolean = req.headers.has('Access-Key');
    const contentType: boolean = req.headers.has('Content-Type');

    // if (!contentType) {
    //   req.headers.append('Content-Type', 'application/json');
    // }
    this.headers = req.headers;

    if (!bypassInterceptor) {
      req = req.clone({
        url: `${this.baseUrl}${req.url}`,
        headers: this.headers,
      });
      return this.handleError(next, req);
    } else {
      this.headers = this.headers.delete('Bypass-Auth');
    }

    return this.getToken().pipe(
      flatMap((token: string) => {
        // The following logic of cloning is repeated for performance improvements
        // So that in any case the "clone" function is called only once
        req = req.clone({
          setHeaders: {
            Authorization: !bypassInterceptor ? token : '',
          },
          headers: this.headers,
          url: `${this.baseUrl}${req.url}`,
        });
        return this.handleError(next, req);
      }),
    );
  }

  handleError(next, req) {
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {},
        (err: any) => {
          if (err) {
            return throwError(err);
          }
        },
      ),
    );
  }

  /*
   Global Errors can be handled in above catch block like the sample below
     if (err.error.meta.status === 401) {
     }
     if (err.error.meta.status === 404) {
     }
*/
  getToken(): Observable<string> {
    // return from(this.authService.getAccessToken());
    return from('');
  }
}
