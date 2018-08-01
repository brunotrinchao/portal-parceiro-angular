import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'par-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() header;
  @Input() lista = [];
  detalhes: Object;

  constructor(private tableService: TableService) {
    // console.log(this.lista);
  }

  ngOnInit() {
    // console.log(this.lista);
  }

  getItem(item: Object){
    this.detalhes = item;
    this.messageEventFunc();
  }

  messageEventFunc(){
    this.tableService.sendEvent(this.detalhes);
  }



}
