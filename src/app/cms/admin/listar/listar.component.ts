import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarService } from './listar.service';
import { ProductsService } from '../../../core/produtcs/products.service';
import { UserService } from '../../../core/user/user.service';
import { User } from '../../../core/user/user';

@Component({
  selector: 'par-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  lista: any[] = [];
  titulo: string = '';
  produto_id: object;
  user: User;

  constructor(
    private activeRoute: ActivatedRoute,
    private listarService: ListarService,
    private userService: UserService
  ) {
    console.log();
  }

  ngOnInit() {

     this.activeRoute.queryParams.subscribe(values => {
      this.produto_id = values;
      this.userService.getUser().subscribe(user => {
        this.user = user;
      });
      console.log(this.produto_id, this.user);
    });


    const tipo = this.activeRoute.snapshot.params.tipo;
    this.titulo = this.activeRoute.snapshot.fragment;
    this.listarService.list(this.user.Parceiro.id, this.user.id, this.produto_id)
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
