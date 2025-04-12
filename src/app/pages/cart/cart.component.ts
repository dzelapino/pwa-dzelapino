import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Minifig} from '../../models/minifig.model';
import {CartService} from '../../services/cart.service';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {Subscription} from 'rxjs';
import {ButtonComponent} from '../../components/button/button.component';
import {NavlinkComponent} from '../../components/navlink/navlink.component';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-cart',
  imports: [
    RouterLink,
    NgForOf,
    NgIf,
    NgOptimizedImage,
    ButtonComponent,
    NavlinkComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart: Minifig[] = [];
  totalPrice: number = 0;
  notificationMessage: string = '';
  private notificationSubscription: Subscription | undefined;

  constructor(private readonly authService: AuthService, private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();

    this.notificationSubscription = this.cartService.notification$.subscribe(
      message => {
        this.notificationMessage = message;
        setTimeout(() => this.notificationMessage = '', 5000);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.notificationSubscription) {
      this.notificationSubscription.unsubscribe();
    }
  }

  removeFromCart(minifig: Minifig): void {
    this.cartService.removeFromCart(minifig);
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  isLoggedIn(): boolean {
    return this.authService.getUser() !== null;
  }
}
