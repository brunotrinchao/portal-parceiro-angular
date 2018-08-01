import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CoreModule } from '../../../core/core.module';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports:[
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule
  ],
  exports:[
    DashboardComponent,

  ]
})
export class ImovelModule {

}
