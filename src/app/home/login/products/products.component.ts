import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'par-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  @Input() product: Object;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goTo(obj){
    if(obj.Url != null || obj.Url != undefined){
      window.location.href = obj.Url;
    }else{
      this.router.navigate(['admin', obj.UrlEncode]);
    }
  }

}
