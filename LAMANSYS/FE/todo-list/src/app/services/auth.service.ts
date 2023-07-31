import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  isLoggedIn !: boolean;

  constructor() { 
    this.isLoggedIn = this.isUserLoggedIn();
  }

  login(username: string, password: string): boolean {
    //usuario y contraseña dados en manos a la obra VI
    if (username == 'admin' && password == '1234') {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('password', password);
      this.isLoggedIn = true;
      return true;
    }
    this.isLoggedIn = false;
    return false;
  }

  logout(): any {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    this.isLoggedIn = false;
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    let pass = sessionStorage.getItem('password');
    if (user == 'admin' && pass == '1234') {
      this.isLoggedIn = true;
      return true;
    }
    this.isLoggedIn = false;
    return false;
  }

}
