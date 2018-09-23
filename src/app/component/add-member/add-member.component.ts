import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../model/person';
import { AngularFireDatabase } from '@angular/fire/database';

declare var $: any;

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  @ViewChild('name') name: ElementRef;
  @ViewChild('father') father: ElementRef;

  isValid: boolean = false;

  sisterCount = 0;

  brotherCount = 0;

  sonCount = 0;

  daughterCount = 0;

  showPopup = false;

  constructor(private router: Router, private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  submitData(element) {
    var data = $('form').serializeArray().reduce(function (obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});
    console.log(data);
    let finalobj: Person = {};
    finalobj.father = data.father;
    finalobj.mother = data.mother? data.mother: null;
    finalobj.husband = data.husband? data.husband: null;
    finalobj.wife = data.wife? data.wife: null;
    finalobj.contact = data.contact? +data.contact: null;
    finalobj.brother = [null];
    finalobj.sister = [null];
    finalobj.son = [null];
    finalobj.daughter = [null];
    for (let i = 1; i <= this.sisterCount; i++) {
      finalobj.sister.push(data['Sister'+i]);
    }
    for (let i = 1; i <= this.brotherCount; i++) {
      finalobj.brother.push(data['Brother'+i]);
    }
    for (let i = 1; i <= this.sonCount; i++) {
      finalobj.son.push(data['Son'+i]);
    }
    for (let i = 1; i <= this.daughterCount; i++) {
      finalobj.daughter.push(data['Daughter'+i]);
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
    this.router.navigateByUrl('/home');
  }

  addRow(element: HTMLElement, type) {
    console.log(element);
    let newRow = document.createElement("tr");
    let count = this.IncrementCount(type);
    let input = '<td class="col-md-10">' +
      '<div class="input-group input-container">' +
      '<div class="input-group-prepend label-container">' +
      '<div class="input-group-text label">' + type + count + '</div>' +
      '</div>' +
      '<input type="text" class="form-control" name="' + type + count + '"/></td>' +
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
