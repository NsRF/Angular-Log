import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from "./user/user.component";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {ProductsComponent} from "./products/products.component";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {IndexComponent} from "./index/index.component";
import {MenuModule} from "primeng/menu";
import {BadgeModule} from "primeng/badge";
import {TabMenuModule} from "primeng/tabmenu";
import {InputTextModule} from "primeng/inputtext";
import {TabViewModule} from "primeng/tabview";



@NgModule({
  declarations: [ UserComponent, ProductsComponent, IndexComponent ],
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    MenuModule,
    BadgeModule,
    TabMenuModule,
    InputTextModule,
    TabViewModule
  ],
  exports: [
    UserComponent,
    ProductsComponent,
    IndexComponent
  ]
})
export class ComponentsModule { }
