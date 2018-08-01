import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./home/login/login.component";
import { AuthGuard } from './core/auth/auth.guard';
import { ImovelComponent } from './cms/admin/imovel/imovel.component';
import { DashboardComponent } from './cms/admin/dashboard/dashboard.component';
import { ListarComponent } from './cms/admin/listar/listar.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin/imovel',
    component: ImovelComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: ':tipo/listar',
        component: ListarComponent
      },
      {
        path: 'interessado/listar',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'admin/consorcio',
    component: ImovelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/financiamento',
    component: ImovelComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule {

}
