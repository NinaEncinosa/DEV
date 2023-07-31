import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  isLoggedIn !: boolean;

  constructor() { 
    this.isLoggedIn = false;
  }

  login(username: string, password: string): boolean {
    //usuario y contraseña dados en manos a la obra VI
    if (username == 'admin' && password == '1234') {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      this.isLoggedIn = true;
      return true;
    }
    this.isLoggedIn = false;
    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

}
