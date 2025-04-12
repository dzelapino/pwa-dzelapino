import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
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

  constructor(private readonly cartService: CartService, private readonly minifigService: MinifigService) {}

  submitOrder() {
    this.isHandlingOrder = true;

    this.cartService.getCart().forEach((item) => {
      this.minifigService.setMinifigAsPurchased(item);
    })

    setTimeout(() => {
      this.isHandlingOrder = false;
    }, 2000)
  }
}
