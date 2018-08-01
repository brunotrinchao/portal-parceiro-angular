import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Product } from './product';
import { TokenService } from '../token/token.service';

const API_URL = 'http://localhost:3000';
const KEY = 'parceiro-products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productSuject = new BehaviorSubject<Product>(null);

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
    // let _token = this.tokenService.getToken()
    if(this.hasProduct()){
      this.decodeAndNotify();
    }
  }

  private decodeAndNotify(){
    const token = this.getProduct();
    const product = token as Product;
    this.productSuject.next(product);
  }

  getAllProducts(){
    return this.http.get(API_URL + '/products')
    .pipe(tap(res => {
      this.setProduct(res);
      this.getProduct();
    }));
  }

  hasProduct(){
    return !!this.getProduct();
  }

  setProduct(token: Object){
    Object.keys(token).forEach(function(key) {
      token[key].UrlEncode = token[key].Produto.toString()
                                                    .normalize('NFD')
                                                    .replace(/[\u0300-\u036f]/g,'')
                                                    .replace(/\s+/g,'-')
                                                    .toLowerCase()
                                                    .replace(/&/g,'-and-')
                                                    .replace(/[^a-z0-9\-]/g,'')
                                                    .replace(/-+/g,'-')
                                                    .replace(/^-*/,'')
                                                    .replace(/-*$/,'');
    });
    window.localStorage.setItem(KEY, btoa(JSON.stringify(token)));
  }

  getProduct(){
    let token = window.localStorage.getItem(KEY);
    let ret = null;
    if(token){
      ret = JSON.parse(atob(token))
    }
    return ret;
  }

  removeProduct(){
    window.localStorage.removeItem(KEY);
  }

}
