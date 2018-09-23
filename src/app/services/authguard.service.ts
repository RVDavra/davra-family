import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  isloggedIn: boolean = false;

  constructor(private router: Router, private fireAuth: AngularFireAuth) { }

  checkLogin() {
    if (window.localStorage.getItem('logdata')) {
      this.isloggedIn = true;
      this.router.navigateByUrl("/home");
    }
    if (!this.isloggedIn) {
      this.router.navigateByUrl("/login");
    }
  }

  login(data) {
    console.log(data);
    window.localStorage.setItem('logdata', 'done');
    this.isloggedIn = true;
  }

  signInWithEmailPassWord(email, password) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.isloggedIn = false;
    window.localStorage.removeItem('logdata');
    this.router.navigateByUrl("/login");
  }
}
