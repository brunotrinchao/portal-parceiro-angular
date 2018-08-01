import { Component, OnInit, Output } from '@angular/core';

@Component({
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css']
})
export class ImovelComponent implements OnInit {

  sidebar: Object[] = [
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
            "url": "/proprietario/listar"
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
  ];

  constructor() { }

  ngOnInit() {
  }
}
