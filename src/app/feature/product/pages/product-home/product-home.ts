import { Component, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Page } from '@ui/components/page';
import { fakeProducts } from './product-home.data';
import { Product } from '@/core/interfaces/product';

@Component({
  selector: 'app-product-home',
  imports: [
    CurrencyPipe,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    Page,
  ],
  templateUrl: './product-home.html',
  styles: ``,
})
export class ProductHome {
  columns = signal<string[]>(['image', 'name', 'price', 'categories']);
  products = signal<Product[]>(fakeProducts);
}
