import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  constructor(
    private http: HttpClient
  ) { }

  list(tipo: string){
    return this.http.get(API_URL + '/list');
  }
}
