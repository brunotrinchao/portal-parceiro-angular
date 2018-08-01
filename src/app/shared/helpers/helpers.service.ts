import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  urlFrendly(string: string){
    return string.toString()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g,'')
                .replace(/\s+/g,'-')
                .toLowerCase()
                .replace(/&/g,'-and-')
                .replace(/[^a-z0-9\-]/g,'')
                .replace(/-+/g,'-')
                .replace(/^-*/,'')
                .replace(/-*$/,'');
  }

}
