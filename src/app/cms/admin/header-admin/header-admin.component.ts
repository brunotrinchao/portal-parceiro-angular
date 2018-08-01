import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../../../core/user/user.service';
import { User } from '../../../core/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'par-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderAdminComponent{

  @Input() menuTopo: Object = {}

  user$: Observable<User>;
  user: User;

  constructor(
    private userService: UserService,
    private router : Router
  ) {
    this.user$ = this.userService.getUser();
    this.user$.subscribe(user => this.user = user);
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['']);
  }


}
