import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AddMemberComponent } from './component/add-member/add-member.component';
import { UpdateMemberComponent } from './component/update-member/update-member.component';
import { SearchMemberComponent } from './component/search-member/search-member.component';
import { DetailComponent } from './component/detail/detail.component';
import { LoginComponent } from './component/login/login.component';
const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddMemberComponent },
  { path: 'update/:name', component: UpdateMemberComponent },
  { path: 'search', component: SearchMemberComponent },
  { path: 'detail/:name', component: DetailComponent },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
