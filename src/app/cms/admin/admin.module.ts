import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {DataTableModule} from "angular-6-datatable";

import { ImovelComponent } from './imovel/imovel.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { DataTableComponent } from '../util/data-table/data-table.component';
import { ListarComponent } from './listar/listar.component';
import { TableComponent } from './listar/table/table.component';
import { StatusComponent } from './listar/status/status.component';
import { ModalComponent } from './listar/modal/modal.component';

@NgModule({
  declarations: [
    ImovelComponent,
    HeaderAdminComponent,
    SidebarAdminComponent,
    DataTableComponent,
    ListarComponent,
    TableComponent,
    StatusComponent,
    ModalComponent
  ],
  imports:[
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    DataTableModule
  ],
  exports:[
    HeaderAdminComponent,
    SidebarAdminComponent,
    DataTableComponent,
    ListarComponent
  ]
})
export class AdminModule {

}
