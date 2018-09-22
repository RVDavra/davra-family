import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DatabaseService } from '../../services/database.service';
import { Person } from '../../model/person';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnChanges {

  constructor(
    public databaseService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) { }

  name;

  personalInfo: Person;

  fatherInfo: Person;

  motherInfo: Person;

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.personalInfo = this.databaseService.getDataOfPerson(this.name);
    this.fatherInfo = this.databaseService.getDataOfPerson(this.personalInfo.father);
    this.motherInfo = this.databaseService.getDataOfPerson(this.personalInfo.mother);
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  navigateToDetail(newname) {
    if (this.databaseService.getDataOfPerson(newname)) {
      this.router.navigateByUrl("/detail/" + newname);
      this.resetData(newname);
      this.cdr.detectChanges();
    }
  }

  resetData(newname) {
    this.name = newname;
    this.personalInfo = this.databaseService.getDataOfPerson(this.name);
    this.fatherInfo = this.databaseService.getDataOfPerson(this.personalInfo.father);
    this.motherInfo = this.databaseService.getDataOfPerson(this.personalInfo.mother);
  }
}
