import { Component, OnInit } from '@angular/core';
import { AuthguardService } from '../../services/authguard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authGuard: AuthguardService, private router: Router) { }

  showPopup = false;

  ngOnInit() {
  }

  login(email, password) {
    let promise = this.authGuard.signInWithEmailPassWord(email,password);
    promise.then(this.loginSuccessful.bind(this))
    .catch(this.showPopUp.bind(this));
  }

  loginSuccessful(data) {
    this.authGuard.login(data);
    this.router.navigateByUrl('/home');
  }

  showPopUp(data) {
    console.log(data);
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
