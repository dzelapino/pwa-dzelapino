import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {ButtonComponent} from '../../components/button/button.component';
import {CartService} from '../../services/cart.service';
import {MinifigService} from '../../services/minifig.service';

@Component({
  selector: 'app-checkout',
  imports: [
    RouterLink,
    ButtonComponent
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  isHandlingOrder : boolean = false;

  constructor(private readonly cartService: CartService,
              private readonly minifigService: MinifigService,
              private readonly router: Router,) {}

  submitOrder() {
    this.isHandlingOrder = true;

    this.cartService.getCart().forEach((item) => {
      this.minifigService.setMinifigAsPurchased(item);
    })

    this.cartService.clearCart();

    setTimeout(() => {
      this.isHandlingOrder = false;
      this.router.navigate(['/minifig/minifig-list']);
    }, 2000)
  }
}
