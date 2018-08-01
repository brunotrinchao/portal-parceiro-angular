import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API_URL = 'http://integracaogtsis.tempsite.ws/api/Indicacoes/Supercredito/Parceiros/';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  constructor(
    private http: HttpClient
  ) { }

  list(parceiro: number, usuario: number, produto){
    return this.http.get(API_URL + '/'+parceiro+'?NumeroPagina=1&TamanhoPagina=100000&idUsuarioParceiro='+usuario+'&idProduto='+produto);
  }
}
