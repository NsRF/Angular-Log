import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem: MenuItem = {};

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Usuarios', icon: 'pi pi-fw pi-user', routerLink: 'users' },
      { label: 'Produtos', icon: 'pi pi-fw pi-user', routerLink: 'products' },
    ];
    this.activeItem = this.items[0];
  }


  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }

  activateLast() {
    this.activeItem = (this.items as MenuItem[])[(this.items as MenuItem[]).length - 1];
  }

}
