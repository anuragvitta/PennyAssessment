import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}
  updateLocalStorage(userData: { userName: string; loggedInAt: Date }) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }
}
