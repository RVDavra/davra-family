import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  isloggedIn: boolean = false;

  constructor(private router: Router) { }

  checkLogin() {
    if (!this.isloggedIn) {
      this.router.navigateByUrl("/login");
    }
  }

  login() {
    this.isloggedIn = true;
    this.router.navigateByUrl('/home');
  }
}
