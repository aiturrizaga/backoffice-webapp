import { Routes } from '@angular/router';
import { ProductHome } from '@/feature/product/pages/product-home';
import {SaveProduct} from '@/feature/product/pages/save-product/save-product';

export const routes: Routes = [
  {
    path: '',
    component: ProductHome
  },
  {
    path: 'register',
    component: SaveProduct
  },
  {
    path: ':productUuid/edit',
    component: SaveProduct
  }
];
