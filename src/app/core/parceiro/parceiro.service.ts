import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import { Parceiro } from './parceiro';

@Injectable({
  providedIn: 'root'
})
export class ParceiroService{

  private parceiroSubject = new BehaviorSubject<Parceiro>(null);

  constructor(private tokenService: TokenService){
    if(this.tokenService.hasToken()){
      this.decodeAndNotify();
    }
  }

  setToken(token: Object){
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getToken(){
    this.tokenService.getToken();
  }

  getParceiro(){
    return this.parceiroSubject.asObservable();
  }

  private decodeAndNotify(){
    const token = this.tokenService.getToken();
    const parceiro = token as Parceiro;
    this.parceiroSubject.next(parceiro);
  }

  logout(){
    this.tokenService.removeToken();
    this.parceiroSubject.next(null);
  }

  isLogged(){
    return this.tokenService.hasToken();
  }

  concatToken(token: Object){
    return this.tokenService.concatToken(token)
  }

}
