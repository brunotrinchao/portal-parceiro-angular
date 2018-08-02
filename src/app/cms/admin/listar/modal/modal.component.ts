import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { TableService } from '../table/table.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'par-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() obj;
  item = {};
  produto_id: object;
  cpf: boolean = false;

  constructor(
    private tableService: TableService,
    private activeRoute: ActivatedRoute,) {
    tableService.messageEvent.subscribe(item => {
      this.item = item;
      this.cpf = this.item['Cliente'].CpfCnpj.length == 14? true : false;
      console.log(item);

    });
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(values => {
      this.produto_id = values.produto;
    });
    console.log(this.produto_id);

  }

  receiveMessage($event) {
    console.log($event);
  }

  isEmptyObject(obj) {
    const ret = (obj && (Object.keys(obj).length === 0));
    return ret;
  }

}
