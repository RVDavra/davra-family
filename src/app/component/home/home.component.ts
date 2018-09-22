import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private db: AngularFireDatabase, private databaseService: DatabaseService) {
    if (!databaseService.data) {
      db.object('/').valueChanges().subscribe(this.handleData.bind(this));
    }
  }

  nameArray: string[] = [];

  ngOnInit() {
    if (this.databaseService.isDataAvailable()) {
      this.nameArray = this.databaseService.getNameArray();
    }
  }

  handleData(data) {
    this.databaseService.setData(data);
  }

}
