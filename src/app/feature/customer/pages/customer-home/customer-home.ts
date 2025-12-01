import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from "@ui/components/page";
import { Customer } from '@/core/interfaces/customer';
import { fakeCustomers } from './customer-home.data';

@Component({
  selector: 'app-customer-home',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    Page
  ],
  templateUrl: './customer-home.html',
  styles: ``,
})
export class CustomerHome {
  columns = signal<string[]>(['name', 'type', 'documentType', 'documentNumber', 'email']);
  customers = signal<Customer[]>(fakeCustomers);

  #router = inject(Router);
  #route = inject(ActivatedRoute);

  gotoCustomerDetail(customer?: Customer): void {
    if (customer) {
      this.#router.navigate([customer.id, 'edit'], {relativeTo: this.#route}).then();
    } else {
      this.#router.navigate(['register'], {relativeTo: this.#route}).then();
    }
  }

}
