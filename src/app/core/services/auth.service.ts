import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private sessionStorageService: SessionStorageService) {}

  register(form: any) {
    const body: any = form;
    return this.http.post('/api/accounts', body);
  }

  login(form: any) {
    const body: any = form ;
    return this.http.post('api/auth/login', body);
  }

  isLoggedin(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const isUser = this.sessionStorageService.getObject('isLoggedin');
      if (isUser === null) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  }
}

