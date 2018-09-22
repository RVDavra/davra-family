import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private location: Location) { }

  name;

  ngOnInit() {
    this.name = +this.route.snapshot.paramMap.get('name');
  }

}
