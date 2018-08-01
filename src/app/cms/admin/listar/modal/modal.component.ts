import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { TableService } from '../table/table.service';

@Component({
  selector: 'par-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() obj;
  item = {};

  constructor(private tableService: TableService) {
    tableService.messageEvent.subscribe(item => {
      this.item = item;
      console.log(item);

    });
  }

  ngOnInit() {
    // this.detalhes = this.obj;
  }

  receiveMessage($event) {
    console.log($event);
  }

}
