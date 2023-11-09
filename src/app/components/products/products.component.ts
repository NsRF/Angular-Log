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
  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(): void {
    this.productsService.returnAllProducts().subscribe(res => this.products = res);
  }

  editProduct() {
    this.editEnabled = !this.editEnabled;
  }

  saveProduct(product: ProductsInterface) {
    this.productsService.updateProduct(product).subscribe(res => window.location.reload());
  }

  redirectToHome() {
    this.router.navigate(['/'])
  }

}
