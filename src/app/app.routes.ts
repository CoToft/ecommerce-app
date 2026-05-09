import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { ProductDetails } from './components/product-details/product-details';
import { CartComponent } from './components/cart/cart';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';

export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'product/:id', component: ProductDetails },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdminDashboard },
  { path: '**', redirectTo: '' }
];