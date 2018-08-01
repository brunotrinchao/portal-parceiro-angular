import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { UserService } from '../../user/user.service';
import { User } from '../../user/user';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'par-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderHomeComponent implements OnInit{

  user$: Observable<User>;
  user: User;

  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private fromBuilder: FormBuilder,
    private authService: AuthService
  ){
    this.user$ = userService.getUser();
    this.user$.subscribe(user => {
      this.user = user as User;
    })
  }

  ngOnInit(): void {
    this.loginForm = this.fromBuilder.group({
      email: ['domicio.imoveis', Validators.required],
      password: ['dom0734',  Validators.required]
    });
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['']);
  }

  logar(){
    console.log('Autenticar');
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.authService.authenticate(email, password)
    .subscribe(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
        this.loginForm.reset();
      }
    )
  }
}
