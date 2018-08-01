import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ActivatedRoute, RouterStateSnapshot, Router } from '@angular/router';

import { ProductsService } from '../produtcs/products.service';
import { Product } from '../produtcs/product';

@Injectable({
  providedIn: 'root'
})
export class MenuService{


  allProduct: any;
  private othrsProduct = new BehaviorSubject<Object[]>(null);
  private activeProduct = new BehaviorSubject<Object>(null);


  menus: Object[] = [{
    "imovel":[
      {
        "nome": "Proprietário",
        "url": null,
        "submenu": [
          {
            "nome": "Comprar/Alugar",
            "url": "proprietário/novo"
          },
          {
            "nome": "Listar",
            "url": "listar"
          }
        ]
      },
      {
        "nome": "Interessado",
        "url": null,
        "submenu": [
          {
            "nome": "Vender/Alugar",
            "url": "interessado/novo"
          },
          {
            "nome": "Listar",
            "url": "listar"
          }
        ]
      }
    ],
    "financiamento":[
      {
        "nome": "Tradicional",
        "url": null,
        "submenu": [
          {
            "nome": "Indicação",
            "url": "tradicional/novo"
          },
          {
            "nome": "Listar",
            "url": "tradicional/listar"
          }
        ]
      },
      {
        "nome": "Refinanciamento",
        "url": null,
        "submenu": [
          {
            "nome": "Indicação",
            "url": "tradicional/novo"
          },
          {
            "nome": "Listar",
            "url": "refinanciamento/listar"
          }
        ]
      }
    ],
    "consorcio":[
      {
        "nome": "Veículo",
        "url": null,
        "submenu": [
          {
            "nome": "Indicação",
            "url": "veiculo/novo"
          },
          {
            "nome": "Listar",
            "url": "listar"
          }
        ]
      },
      {
        "nome": "Imóvel",
        "url": null,
        "submenu": [
          {
            "nome": "Indicação",
            "url": "imovel/novo"
          },
          {
            "nome": "Listar",
            "url": "listar"
          }
        ]
      }
    ]
  }];

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){
    this.emiterMenu()
  }


  generateMenuTopo(){

    return this.othrsProduct.asObservable()
  }

  generateMenuSidebar(){
    return this.activeProduct.asObservable();
  }

  getAllProduct(){
      this.allProduct = this.productsService.getProduct();
  }

  getAtualProduct(){
    return this.activatedRoute.snapshot.params.produto;
  }

  private emiterMenu(){
    this.getAllProduct();
    const produto = this.getAtualProduct();
    const allMenu =  this.allProduct.filter(ret => ret.UrlEncode != produto);
    const oneMenu =  this.menus[0][produto];


    this.othrsProduct.next(allMenu);
    this.activeProduct.next(oneMenu);
  }

}
