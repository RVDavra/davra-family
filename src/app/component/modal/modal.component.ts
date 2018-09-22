import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input('title') title;
  @Input('message') message;

  @Input('disable') disable: boolean = true;

  @Output('closePopup') closePopup = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.disable = true;
    this.closePopup.emit("false");
  }
}
