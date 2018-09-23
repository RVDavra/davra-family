import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Person } from '../../model/person';
import { DatabaseService } from '../../services/database.service';
import { Location } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.scss']
})
export class UpdateMemberComponent implements OnInit {


  @ViewChild('name') name: ElementRef;
  @ViewChild('father') father: ElementRef;
  @ViewChild('sisterTable') sisterTable: ElementRef;
  @ViewChild('brotherTable') brotherTable: ElementRef;
  @ViewChild('sonTable') sonTable: ElementRef;
  @ViewChild('daughterTable') daughterTable: ElementRef;

  isValid: boolean = true;

  sisterCount = 0;

  brotherCount = 0;

  sonCount = 0;

  daughterCount = 0;

  showPopup = false;

  personName: string;

  personalInfo;

  constructor(private route: ActivatedRoute, private router: Router, private db: AngularFireDatabase, private databaseService: DatabaseService, private location: Location) { }

  ngOnInit() {
    this.personName = this.route.snapshot.paramMap.get('name');
    this.personalInfo = this.databaseService.getDataOfPerson(this.personName);
    if (this.personalInfo.sister) {
      for (const data of this.personalInfo.sister) {
        if (data) {
          this.addRow(this.sisterTable.nativeElement, 'Sister', data);
        }
      }
    }
    if (this.personalInfo.brother) {
      for (const data of this.personalInfo.brother) {
        if (data) {
          this.addRow(this.brotherTable.nativeElement, 'Brother', data);
        }
      }
    }
    if (this.personalInfo.son) {
      for (const data of this.personalInfo.son) {
        if (data) {
          this.addRow(this.sonTable.nativeElement, 'Son', data);
        }
      }
    }
    if (this.personalInfo.daughter) {
      for (const data of this.personalInfo.daughter) {
        if (data) {
          this.addRow(this.daughterTable.nativeElement, 'Daughter', data);
        }
      }
    }
  }

  submitData(element) {
    var data = $('form').serializeArray().reduce(function (obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});
    console.log(this.sisterCount);
    console.log(data);
    let finalobj: Person = {};
    finalobj.father = data.father;
    finalobj.mother = data.mother ? data.mother : null;
    finalobj.husband = data.husband ? data.husband : null;
    finalobj.wife = data.wife ? data.wife : null;
    finalobj.contact = data.contact ? +data.contact : null;
    finalobj.brother = [null];
    finalobj.sister = [null];
    finalobj.son = [null];
    finalobj.daughter = [null];
    for (let i = 1; i <= this.sisterCount; i++) {
      finalobj.sister.push(data['Sister' + i]);
    }
    for (let i = 1; i <= this.brotherCount; i++) {
      finalobj.brother.push(data['Brother' + i]);
    }
    for (let i = 1; i <= this.sonCount; i++) {
      finalobj.son.push(data['Son' + i]);
    }
    for (let i = 1; i <= this.daughterCount; i++) {
      finalobj.daughter.push(data['Daughter' + i]);
    }
    this.db.object(data.name).set(finalobj).then(this.showPopUp.bind(this));
    console.log(finalobj);
  }

  isValidData() {
    if (this.name.nativeElement.value != '' && this.father.nativeElement.value != '') {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  goBack() {
    this.location.back();
  }

  addRow(element: HTMLElement, type, value = '') {
    let newRow = document.createElement("tr");
    let count = this.IncrementCount(type);
    let input = '<td class="col-md-10">' +
      '<div class="input-group input-container">' +
      '<div class="input-group-prepend label-container">' +
      '<div class="input-group-text label">' + type + count + '</div>' +
      '</div>' +
      '<input type="text" class="form-control" name="' + type + count + '" value="' + value + '"/></td>' +
      '</div>';
    newRow.innerHTML = input;
    element.appendChild(newRow);
  }

  IncrementCount(type) {
    if (type === 'Sister') {
      this.sisterCount++;
      return this.sisterCount;
    }
    if (type === "Brother") {
      this.brotherCount++;
      return this.brotherCount;
    }
    if (type === "Son") {
      this.sonCount++;
      return this.sonCount;
    }
    if (type === "Daughter") {
      this.daughterCount++;
      return this.daughterCount;
    }
  }

  showPopUp(data) {
    console.log(data);
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.goBack();
  }
}
