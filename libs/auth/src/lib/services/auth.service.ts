import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Injectable()
export class AuthService {
  constructor() {}
  updateLocalStorage(accessToken: string) {
    localStorage.setItem('userToken', accessToken);
  }
  getToken() {
    return localStorage.getItem('userToken');
  }
  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date?.valueOf() > new Date().valueOf());
  }
  logout() {
    return localStorage.removeItem('userToken');
  }
}
