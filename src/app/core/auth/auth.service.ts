import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UserService } from '../user/user.service';

const API_URL = 'http://integracaogtsis.tempsite.ws/api/Parceiros/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers: {};
  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
    this.headers = {
      'Authorization': "YnJ1bm86SW50ZWdyYWNhb1BhcmNlaXJvcw==",
      'Content-Type': "application/json"
    }
  }

  authenticate(email: string, password: string){
    return this.http.get(API_URL + '/'+email+'/'+password, {headers: this.headers})
    .pipe(tap(res => {
      this.userService.setToken(res);
    }))
    // return this.http.get(API_URL + '/users/1', {headers: this.headers})
    // .pipe(tap(res => {
    //   this.userService.setToken(res);
    // }))
  }
}
