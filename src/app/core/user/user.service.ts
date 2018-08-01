import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  private userSuject = new BehaviorSubject<User>(null);

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

  getUser(){
    return this.userSuject.asObservable();
  }

  private decodeAndNotify(){
    const token = this.tokenService.getToken();
    const user = token as User;
    this.userSuject.next(user);
  }

  logout(){
    this.tokenService.removeToken();
    this.userSuject.next(null);
  }

  isLogged(){
    return this.tokenService.hasToken();
  }

  concatToken(token: Object){
    return this.tokenService.concatToken(token)
  }

}
