import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'par-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  titulo: string = 'Dashboard'

  constructor() { }

  ngOnInit() {
  }

}
