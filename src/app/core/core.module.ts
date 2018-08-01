import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderHomeComponent } from './headers/header-home/header-home.component';

@NgModule({
  declarations: [
    HeaderHomeComponent
  ],
  imports:[
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    HeaderHomeComponent
  ]
})
export class CoreModule {

}
