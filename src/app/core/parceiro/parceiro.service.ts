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

  getParceiro(){
    return this.parceiroSubject.asObservable();
  }

  private decodeAndNotify(){
    const token = this.tokenService.getToken();
    const parceiro = token.Parceiro as Parceiro;
    this.parceiroSubject.next(parceiro);
  }


}
