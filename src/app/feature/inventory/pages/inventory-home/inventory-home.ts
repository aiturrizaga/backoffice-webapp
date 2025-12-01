import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Page } from "@ui/components/page";
import { fakeInventory } from './inventory-home.data';

@Component({
  selector: 'app-inventory-home',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    Page
  ],
  templateUrl: './inventory-home.html',
  styles: ``,
})
export class InventoryHome {
  columns = signal<string[]>(['name', 'sku', 'warehouse', 'currentStock', 'uom', 'priceBase', 'lastTransaction']);
  inventories = signal<any[]>(fakeInventory);

  #router = inject(Router);
  #route = inject(ActivatedRoute);

  gotoItemDetail(item?: any): void {

  }
}
