import { Component, OnInit } from '@angular/core';
import {ProductsInterface} from "../../interfaces/products.interface";
import {ProductsService} from "../../services/products/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductsInterface[] = [];
  editEnabled = false;
  clonedProducts: { [s: string]: ProductsInterface; } = {};
  products2: ProductsInterface[] = [];

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(): void {
    this.productsService.returnAllProducts().subscribe(res => this.products = res);
  }

  onRowEditInit(product: ProductsInterface) {
    this.clonedProducts[product.id] = {...product};
  }

  onRowEditSave(product: ProductsInterface) {
    this.productsService.updateProduct(product).subscribe(x => console.log(x));
  }

  onRowEditCancel(product: ProductsInterface  , index: number) {
    this.products2[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
  }

}
