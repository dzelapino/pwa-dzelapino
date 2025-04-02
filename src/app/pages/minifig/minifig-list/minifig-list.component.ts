import { Component } from '@angular/core';
import {MinifigService} from '../../../services/minifig.service';
import {Minifig} from '../../../models/minifig.model';
import {NgForOf, NgIf} from '@angular/common';
import {MinifigFormComponent} from '../minifig-form/minifig-form.component';
import {MinifigEditComponent} from '../minifig-edit/minifig-edit.component';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-minifig-list',
  imports: [
    NgForOf,
    MinifigFormComponent,
    MinifigEditComponent,
    NgIf
  ],
  templateUrl: './minifig-list.component.html',
  styleUrl: './minifig-list.component.scss'
})
export class MinifigListComponent {
  minifigs: Minifig[] = [];
  editedMinifig: Minifig | null = null;

  constructor(private readonly minifigService: MinifigService, private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.minifigService.minifigs$.subscribe(minifigs => this.minifigs = minifigs);
  }

  onMinifigAdded(newMinifig: Minifig): void {
    newMinifig.id = this.minifigs.length ? Math.max(...this.minifigs.map(m => m.id)) + 1 : 1;
    this.minifigService.addMinifig(newMinifig);
  }

  deleteMinifig(id: number): void {
    this.minifigService.deleteMinifig(id);
  }

  startEditing(minifig: Minifig): void {
    this.editedMinifig = { ...minifig };
  }

  onMinifigUpdated(updatedMinifig: Minifig): void {
    this.minifigService.updateMinifig(updatedMinifig);
    this.editedMinifig = null;
  }

  cancelEditing(): void {
    this.editedMinifig = null;
  }

  addToCart(minifig: Minifig): void {
    this.cartService.addToCart(minifig);
  }

  isInCart(minifig: Minifig): boolean {
    const cart = this.cartService.getCart();
    return cart.some(item => item.id === minifig.id);
  }
}
