import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { MessageModule } from '../shared/message/message.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './login/products/products.component';

@NgModule({
  declarations: [
    LoginComponent,
    ProductsComponent
  ],
  imports:[
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    MessageModule,
    CoreModule,
    SharedModule,
    RouterModule
  ]
})
export class HomeModule {

}
