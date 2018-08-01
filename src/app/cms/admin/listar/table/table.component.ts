import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'par-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() header;
  @Input() lista = [];
  @Output() messageEvent = new EventEmitter<Object>();
  detalhes: Object;

  constructor() {
    // console.log(this.lista);
  }

  ngOnInit() {
    // console.log(this.lista);
  }

  getItem(item: Object){
    this.detalhes = item;
    this.messageEvent.emit(item);
  }

}
