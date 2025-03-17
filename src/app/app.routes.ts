import { Routes } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {UserPageComponent} from './pages/user/user-page/user-page.component';
import {ListComponent} from './pages/minifig/list/list.component';
import {DetailsComponent} from './pages/minifig/details/details.component';
import {CheckoutComponent} from './pages/checkout/checkout.component';
import {CartComponent} from './pages/cart/cart.component';
import {OrderComponent} from './pages/order/order.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'minifig/list', component: ListComponent },
  { path: 'minifig/details', component: DetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order', component: OrderComponent },
  { path: 'user', component: UserPageComponent },
];
