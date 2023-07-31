import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) {
  }

  login(username: string, password: string) {
    if (this.authService.login(username, password)) 
      this.router.navigateByUrl('/');
    else {
      alert('Invalid credentials!');
    }

  }

}
