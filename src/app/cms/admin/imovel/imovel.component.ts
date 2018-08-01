import { Component, OnInit, Output } from '@angular/core';

@Component({
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css']
})
export class ImovelComponent implements OnInit {

  sidebar: Object[] = [
      {
        "id": 1,
        "nome": "Proprietário",
        "url": null,
        "submenu": [
          {
            "nome": "Comprar/Alugar",
            "url": "proprietario/novo"
          },
          {
            "nome": "Listar",
            "url": "/proprietario/listar"
          }
        ]
      },
      {
        "id": 1,
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
