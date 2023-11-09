import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {UserInterface} from "../../interfaces/user.interface";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ProductsInterface} from "../../interfaces/products.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  returnAllProducts(): Observable<any[]> {
    return this.http.get<ProductsInterface[]>(`${environment.baseUrlApi}/products`);
  }

  updateProduct(product: ProductsInterface): Observable<any> {
    return this.http.put(`${environment.baseUrlApi}/products/${product.id}`, {
      name: product.name
    })
  }
}
