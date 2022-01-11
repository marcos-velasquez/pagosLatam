import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() visible = false;
  items?: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'RECARGAS', icon: 'pi pi-money-bill', routerLink: '/dashboard/categorias' },
      { label: 'HISTORIAL', icon: 'pi pi-history', routerLink: '/historial' },
    ];
  }
}
