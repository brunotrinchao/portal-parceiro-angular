import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { ImovelModule } from './admin/imovel/imovel.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [

  ],
  imports:[
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule,
    ImovelModule,
    AdminModule
  ],
  exports:[
  ]
})
export class CmsModule {

}
