import { booleanAttribute, Component, input, output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconButton } from '@angular/material/button';
import { MenuItem } from '@ui/interfaces/menu';

@Component({
  selector: 'app-sidenav',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatIconButton
  ],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
})
export class Sidenav {
  collapsed = input<boolean>(false);
  hideToggleCollapseBtn = input(false, { transform: booleanAttribute });
  toggleCollapsed = output<boolean>();

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      routerLink: 'dashboard'
    },
    {
      icon: 'sell',
      label: 'Productos',
      routerLink: 'products'
    },
    {
      icon: 'category',
      label: 'Categorías',
      routerLink: 'categories'
    },
    {
      icon: 'account_box',
      label: 'Clientes',
      routerLink: 'customers'
    },
    {
      icon: 'inventory_2',
      label: 'Inventario',
      routerLink: 'inventory'
    },
    {
      icon: 'settings',
      label: 'Configuración',
      routerLink: 'settings'
    }
  ]);

  selectedModule = signal<MenuItem | null>(null);
  moduleItems = signal<MenuItem[]>([
    {
      id: 'burguesitas',
      label: 'Burguesitas S.A.C.',
      imageUrl: 'https://img.icons8.com/softteal-gradient/96/handshake.png'
    },
    {
      id: 'pikalos',
      label: 'Pikalos S.A.C.',
      imageUrl: 'https://img.icons8.com/softteal-gradient/96/box.png'
    }
  ]);

}
