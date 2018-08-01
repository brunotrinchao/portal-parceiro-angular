import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'par-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarAdminComponent{

  @Input() sidebar: Object[] = []

  constructor(
  ) {
    console.log(this.sidebar);
  }


}
