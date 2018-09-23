import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  @ViewChild('name') name: ElementRef;

  isValid: boolean = false;

  sisterCount = 0;

  brotherCount = 0;

  sonCount = 0;

  daughterCount = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitData() {
    console.log("this.submitData");
  }

  isValidData() {
    if (this.name.nativeElement.value != '') {
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
        '<div class="input-group-text label">'+ type + count + '</div>' +
      '</div>' +
      '<input type="text" class="form-control" name="'+ type + count + '"/></td>'+
    '</div>';
    newRow.innerHTML = input;
    element.appendChild(newRow);
  }

  IncrementCount(type) {
    if(type === 'Sister') {
      this.sisterCount++;
      return this.sisterCount;
    }
    if(type === "Brother") {
      this.brotherCount++;
      return this.brotherCount;
    }
    if(type === "Son") {
      this.sonCount++;
      return this.sonCount;
    }
    if(type === "Daughter") {
      this.daughterCount++;
      return this.daughterCount;
    }
  }
}
