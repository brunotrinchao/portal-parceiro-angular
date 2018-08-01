import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'par-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() obj;
  item = {};

  constructor() {
  }

  ngOnInit() {
    // this.detalhes = this.obj;
  }

  receiveMessage($event) {
    console.log($event);
    this.item = $event
  }

}
