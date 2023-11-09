import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./components/user/user.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {ProductsComponent} from "./components/products/products.component";
import {IndexComponent} from "./components/index/index.component";

const routes: Routes = [
  {path: 'users', component: UserComponent },
  {path: '', component: IndexComponent },
  {path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
