import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { CmsModule } from './cms/cms.module';
import { SharedModule } from './shared/shared.module';
import { ImovelModule } from './cms/admin/imovel/imovel.module';

import {DataTableModule} from "angular-6-datatable";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    CmsModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
