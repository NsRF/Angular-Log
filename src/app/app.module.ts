import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ComponentsModule} from "./components/components.module";
import { ProductsComponent } from './components/products/products.component';
import {AccordionModule} from "primeng/accordion";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        ComponentsModule,
        HttpClientModule,
        AppRoutingModule,
        AccordionModule,
        RadioButtonModule,
        FormsModule,
        PanelModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
