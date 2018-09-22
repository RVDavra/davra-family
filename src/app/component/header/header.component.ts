import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('title') title;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToDetail(url) {
    this.router.navigateByUrl(url);
  }

}
