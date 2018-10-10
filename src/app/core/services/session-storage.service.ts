import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageService {
  constructor() {}

  getObject(key) {
    return JSON.parse(sessionStorage.getItem(key));
  }

  setObject(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  clear() {
    sessionStorage.clear();
  }

  remove(key) {
    sessionStorage.removeItem(key);
  }
}
