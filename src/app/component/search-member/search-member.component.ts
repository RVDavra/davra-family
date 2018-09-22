import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-search-member',
  templateUrl: './search-member.component.html',
  styleUrls: ['./search-member.component.scss']
})
export class SearchMemberComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  nameArray: string[] = [];
  searchData = [];

  ngOnInit() {
    this.nameArray = this.databaseService.getNameArray();
  }

  search(query) {
    this.searchData = this.nameArray.filter((value,index,array) => {
      return value.toLowerCase().includes(query.toLowerCase());
    });
  }
}
