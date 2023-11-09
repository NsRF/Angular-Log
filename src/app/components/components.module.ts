import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from "./user/user.component";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {ProductsComponent} from "./products/products.component";



@NgModule({
  declarations: [ UserComponent, ProductsComponent ],
  imports: [
    CommonModule,
    TableModule,
    FormsModule
  ],
  exports: [
    UserComponent,
    ProductsComponent
  ]
})
export class ComponentsModule { }
