import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Davra Family';
  constructor(private db: AngularFireDatabase,private databaseService: DatabaseService) {
    db.object('/').valueChanges().subscribe(this.handleData.bind(this));
  }

  handleData(data) {
    this.databaseService.setData(data);
  }
}
