import { Routes } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {MinifigListComponent} from './pages/minifig/minifig-list/minifig-list.component';
import {CheckoutComponent} from './pages/checkout/checkout.component';
import {CartComponent} from './pages/cart/cart.component';
import {OrderComponent} from './pages/order/order.component';
import {MinifigFormComponent} from './pages/minifig/minifig-form/minifig-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'minifig/minifig-list', component: MinifigListComponent },
  { path: 'minifig/minifig-form', component: MinifigFormComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order', component: OrderComponent },
];
