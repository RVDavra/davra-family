import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseService } from './services/database.service';
import { AuthguardService } from './services/authguard.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Davra Family';
  constructor(private db: AngularFireDatabase,
    private fireAuth: AngularFireAuth,
    private databaseService: DatabaseService, 
    private authguard: AuthguardService) {
    authguard.checkLogin();
    if (authguard.isloggedIn) {
      // db.object('/').valueChanges().subscribe(this.handleData.bind(this));
    }
  }

  handleData(data) {
    this.databaseService.setData(data);
  }
}
