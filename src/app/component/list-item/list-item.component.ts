import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Person } from '../../model/person';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input('name') name;

  personalInfo: Person;
  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.personalInfo = this.databaseService.getDataOfPerson(this.name);
  }

  getContact() {
    return this.personalInfo.contact? this.personalInfo.contact: "no contact info available";
  }
}
