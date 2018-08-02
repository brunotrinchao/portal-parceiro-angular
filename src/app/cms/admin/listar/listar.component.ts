import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarService } from './listar.service';
import { ProductsService } from '../../../core/produtcs/products.service';
import { UserService } from '../../../core/user/user.service';
import { User } from '../../../core/user/user';
import { ParceiroService } from '../../../core/parceiro/parceiro.service';
import { Parceiro } from '../../../core/parceiro/parceiro';

@Component({
  selector: 'par-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  lista: Object;
  titulo: string = '';
  produto_id: object;
  user: User;
  parceiro: Parceiro

  constructor(
    private activeRoute: ActivatedRoute,
    private listarService: ListarService,
    private userService: UserService,
    private productsService: ProductsService
  ) {
    console.log();
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(values => {
      this.produto_id = values.produto;
    });
    this.userService.getUser().subscribe(user => {
      this.user = user;
      this.parceiro = this.user.Parceiro;
    });

    const tipo = this.activeRoute.snapshot.params.tipo;
    this.titulo = this.activeRoute.snapshot.fragment;
    console.log(this.produto_id);

    this.listarService.list(this.parceiro.id, this.user.id, this.produto_id)
    .subscribe(
      success => {
        this.lista = success['Data'];
        console.log(this.lista);

      },
      error => {
        console.log(error);
      }
    )
  }

}
