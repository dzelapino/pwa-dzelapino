import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ButtonComponent} from '../../components/button/button.component';

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

  submitOrder() {
    this.isHandlingOrder = true;
    setTimeout(() => {
      this.isHandlingOrder = false;
    }, 2000)
  }
}
