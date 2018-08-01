import { Component, ViewEncapsulation} from "@angular/core";
import { Observable } from 'rxjs';

import { ProductsService } from '../../core/produtcs/products.service';
import { Product } from '../../core/produtcs/product';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  product$: Observable<any>;
  product: Product;

  constructor(
    private productsService: ProductsService
  ) {
    this.product$ = this.productsService.getAllProducts();
    this.product$.subscribe(success => {
      this.product = success as Product;
      this.productsService.setProduct(this.product)
    });
  }

  ngOnInit() {
    this.productsService.getAllProducts()
    .subscribe(
      success => {
        this.product = success as Product;
        this.productsService.setProduct(this.product)
    },
      error => {
        console.log(error);
    }
  );
  }

}
