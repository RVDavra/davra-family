import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Person } from '../../model/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input('name') name;

  personalInfo: Person;
  constructor(private databaseService: DatabaseService,private router: Router) {}

  ngOnInit() {
    this.personalInfo = this.databaseService.getDataOfPerson(this.name);
  }

  getContact() {
    return this.personalInfo.contact? this.personalInfo.contact: "Not Available";
  }

  getOpenLink() {
    if(this.personalInfo.contact != undefined) {
      return 'tel:'+this.personalInfo.contact;
    } else {
      return '';
    }
  }

  openCall() {
    if(this.personalInfo.contact != undefined) {
      return 'tel:'+this.personalInfo.contact;
    } else {
      return '';
    }
  }

  navigateToDetail() {
    this.router.navigateByUrl("/detail/"+this.name);
  }
}
