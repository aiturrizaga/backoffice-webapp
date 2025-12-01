import { Routes } from '@angular/router';
import { CustomerHome } from '@/feature/customer/pages/customer-home';
import { SaveCustomer } from '@/feature/customer/pages/save-customer';

export const routes: Routes = [
  {
    path: '',
    component: CustomerHome
  },
  {
    path: 'register',
    component: SaveCustomer
  },
  {
    path: ':customerUuid/edit',
    component: SaveCustomer
  }
];
