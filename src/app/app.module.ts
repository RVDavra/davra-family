import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireAuthModule } from '@angular/fire/auth'

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ListItemComponent } from './component/list-item/list-item.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { AddMemberComponent } from './component/add-member/add-member.component';
import { UpdateMemberComponent } from './component/update-member/update-member.component';
import { SearchMemberComponent } from './component/search-member/search-member.component';
import { DetailComponent } from './component/detail/detail.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DatabaseService } from './services/database.service';
import { ModalComponent } from './component/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    HomeComponent,
    AddMemberComponent,
    UpdateMemberComponent,
    SearchMemberComponent,
    DetailComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [ DatabaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
