import {Minifig} from '../models/minifig.model';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly notificationSubject = new Subject<string>();
  notification$ = this.notificationSubject.asObservable();

  constructor(private readonly authService: AuthService) {}

  addToCart(minifig: Minifig): void {
    const user = this.authService.getUser();
    if (user) {
      user.cart.push(minifig);
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  removeFromCart(minifig: Minifig): void {
    const user = this.authService.getUser();
    if (user) {
      user.cart = user.cart.filter(item => item.id !== minifig.id);
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  getCart(): Minifig[] {
    const user = this.authService.getUser();
    return user ? user.cart : [];
  }

  getUser() {
    return this.authService.getUser();
  }

  getTotalPrice(): number {
    const cart = this.getCart();
    return cart.reduce((total, minifig) => total + (minifig.price || 0), 0);
  }
}
