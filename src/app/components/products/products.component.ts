import { Component, OnInit } from '@angular/core';
import {ProductsInterface} from "../../interfaces/products.interface";
import {ProductsService} from "../../services/products/products.service";
import {UserInterface} from "../../interfaces/user.interface";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductsInterface[] = [];
  editEnabled = false;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(): void {
    this.productsService.returnAllProducts().subscribe(res => this.products = res);
  }

  editProduct() {
    this.editEnabled = !this.editEnabled;
  }

  saveProduct(user: UserInterface) {
    this.productsService.updateUser(user).subscribe(res => window.location.reload());
  }

}
