import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from '../../services/authguard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('title') title;

  isLoggedIn = false;

  constructor(private router: Router,public authguard: AuthguardService) { 
    this.isLoggedIn = this.authguard.isloggedIn;
  }

  ngOnInit() {
  }

  navigateToDetail(url) {
    this.router.navigateByUrl(url);
  }

  logout() {
    this.authguard.logout();
  }
}
