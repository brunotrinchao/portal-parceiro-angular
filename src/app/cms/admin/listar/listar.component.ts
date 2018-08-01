import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListarService } from './listar.service';

@Component({
  selector: 'par-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  lista: any[] = [];

  titulo: string = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private listarService: ListarService
  ) {
    console.log();
  }

  ngOnInit() {
    const tipo = this.activeRoute.snapshot.params.tipo;
    this.titulo = this.activeRoute.snapshot.fragment;
    this.listarService.list(tipo)
    .subscribe(
      success => {
        this.lista = [success['proprietario'].Data];
        console.log(this.lista);

      },
      error => {
        console.log(error);
      }
    )
  }

}
