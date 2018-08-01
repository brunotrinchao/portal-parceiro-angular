import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HelpersService } from './helpers/helpers.service';


@NgModule({
  declarations: [
  ],
  imports:[
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
  ]
})
export class SharedModule {

}
