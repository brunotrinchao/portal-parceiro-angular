import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'par-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  statusLista: Object[] = [
    {
        "id": 1,
        "Status": "Novo",
        "Descricao": "Aguardando Atendimento",
        "class": "primary"
    },
    {
        "id": 2,
        "Status": "Atendimento",
        "Descricao": "Aguardando Atendimento",
        "class": "primary"
    },
    {
        "id": 3,
        "Status": "Retorno",
        "Descricao": "Retornar Ligação Depois",
        "class": "primary"
    },
    {
        "id": 4,
        "Status": "Visita Agendada",
        "Descricao": "Visita Agendada",
        "class": "primary"
    },
    {
        "id": 5,
        "Status": "Lixo",
        "Descricao": "Cliente Descartado",
        "class": "secondary"
    },
    {
        "id": 6,
        "Status": "Arquivado",
        "Descricao": "Cliente Descartado",
        "class": "danger"
    },
    {
        "id": 7,
        "Status": "Sem Contato",
        "Descricao": "Não Conseguiu Contato",
        "class": "light"
    },
    {
        "id": 8,
        "Status": "Sem Perfil",
        "Descricao": "Cliente não tem Pefil",
        "class": "danger"
    },
    {
        "id": 9,
        "Status": "Sem Interesse",
        "Descricao": "Cliente não tem Interesse",
        "class": "danger"
    },
    {
        "id": 10,
        "Status": "Congelado",
        "Descricao": "Cliente Descartado",
        "class": "dark"
    },
    {
        "id": 11,
        "Status": "Gerou Consultoria",
        "Descricao": "Visitado - Elaborando Proposta",
        "class": "success"
    },
    {
        "id": 12,
        "Status": "Gerou Negócio",
        "Descricao": "Negócio Fechado",
        "class": "success"
    },
    {
        "id": 13,
        "Status": "Indicou Fechamento",
        "Descricao": "Em Processo de Fechamento",
        "class": "info"
    },
    {
        "id": 14,
        "Status": "Renovação",
        "Descricao": "Aguardando Renovação",
        "class": "primary"
    },
    {
        "id": 15,
        "Status": "Pré-Agendamento",
        "Descricao": "Pré-Agendamento",
        "class": "danger"
    },
    {
        "id": 16,
        "Status": "Recuperar",
        "Descricao": "Recuperando Cliente",
        "class": "primary"
    },
    {
        "id": 17,
        "Status": "Visita Venda",
        "Descricao": "Visita para Venda",
        "class": "danger"
    }
  ];

  @Input() statusObj;

  status: string = '';
  titulo: string = '';

  constructor() {}

  ngOnInit() {
    // const obj = this.serachStatus(this.statusObj.id);
    // this.status = obj.Descricao;
    // console.log(obj);

    this.titulo = this.statusObj.Descricao;
    console.log(this.titulo);

  }

  setStatus(id: number){
    ;
  }

  private serachStatus(id: number){
    const ret = this.statusLista.filter(function(key) {
      if(this.statusLista.id == id){
      console.log(this.statusLista);
      }

      // return this.statusLista[key].id = id;
    });


  }

}
