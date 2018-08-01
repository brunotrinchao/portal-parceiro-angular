import { Injectable } from '@angular/core';

const KEY = 'parceiro-token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasToken(){
    return !!this.getToken();
  }

  setToken(token: Object){
    window.localStorage.setItem(KEY, btoa(JSON.stringify(token)));
  }

  getToken(){
    let token = window.localStorage.getItem(KEY);
    let ret = null;
    if(token){
      ret = JSON.parse(atob(token))
    }
    return ret;
  }

  removeToken(){
    window.localStorage.removeItem(KEY);
  }

  concatToken(token: Object){
    let _token = this.getToken();
    let concat = Object.assign({}, _token, token);
    this.setToken(concat);
  }


}
