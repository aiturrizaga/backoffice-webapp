import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { Page } from '@ui/components/page';

interface Metric {
  title: string;
  value: string;
  change: number;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-dashboard-home',
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatChipsModule,
    Page,
  ],
  templateUrl: './dashboard-home.html',
  styles: ``,
})
export class DashboardHome {
  isLoading = signal(false);

  metrics = signal<Metric[]>([
    {
      title: 'Ventas del día',
      value: '$12,345',
      change: 12.5,
      icon: 'attach_money',
      color: '#10b981'
    },
    {
      title: 'Transacciones',
      value: '156',
      change: 8.2,
      icon: 'shopping_cart',
      color: '#3b82f6'
    },
    {
      title: 'Clientes',
      value: '89',
      change: -3.1,
      icon: 'people',
      color: '#f59e0b'
    },
    {
      title: 'Ticket Promedio',
      value: '$79.13',
      change: 5.8,
      icon: 'receipt',
      color: '#8b5cf6'
    }
  ]);

  topProducts = signal([
    {name: 'Laptop Dell XPS', sales: 45},
    {name: 'Mouse Logitech', sales: 38},
    {name: 'Teclado Mecánico', sales: 32},
    {name: 'Monitor LG', sales: 28},
    {name: 'Auriculares Sony', sales: 25}
  ]);

  recentActivity = signal([
    {id: 1, icon: 'shopping_bag', message: 'Nueva venta realizada - S/ 1,299.99', time: 'Hace 5 minutos'},
    {id: 2, icon: 'person_add', message: 'Nuevo cliente registrado', time: 'Hace 15 minutos'},
    {id: 3, icon: 'inventory', message: 'Stock actualizado para 5 productos', time: 'Hace 1 hora'},
    {id: 4, icon: 'payment', message: 'Pago procesado exitosamente', time: 'Hace 2 horas'}
  ]);

}
