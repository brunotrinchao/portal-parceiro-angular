import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API_URL = 'http://integracaogtsis.tempsite.ws/api/Indicacoes/Supercredito/Parceiros/';

@Injectable({
  providedIn: 'root'
})
export class ListarService {
  headers: {};
  constructor(
    private http: HttpClient
  ) {
    this.headers = {
      'Authorization': "YnJ1bm86SW50ZWdyYWNhb1BhcmNlaXJvcw==",
      'Content-Type': "application/json"
    }
  }

  list(parceiro: number, usuario: number, produto){
    return this.http.get(API_URL + '/'+parceiro+'?NumeroPagina=1&TamanhoPagina=100000&idUsuarioParceiro='+usuario+'&idProduto='+produto, {headers: this.headers});
  }
}
