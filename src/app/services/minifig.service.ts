import { Injectable } from '@angular/core';
import {Minifig} from '../models/minifig.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinifigService {
  private readonly localStorageKey = 'minifigs';
  private readonly minifigsSource = new BehaviorSubject<Minifig[]>(this.loadMinifigs());

  minifigs$ = this.minifigsSource.asObservable();

  private loadMinifigs(): Minifig[] {
    return [
      { id: 1, name: 'Darth Vader', image: 'vader', price: 49.99, hasBeenBought: false },
      { id: 2, name: 'Jar Jar', image: 'jarjar', price: 19.99, hasBeenBought: false },
      { id: 3, name: 'B2', image: 'b2', price: 69.99, hasBeenBought: false },
      { id: 4, name: 'Revan', image: 'revan', price: 999.99, hasBeenBought: false }
    ];
  }

  addMinifig(minifig: Minifig): void {
    const current = this.minifigsSource.value;
    this.minifigsSource.next([...current, minifig]);
  }

  deleteMinifig(id: number): void {
    const updated = this.minifigsSource.value.filter(m => m.id !== id);
    this.minifigsSource.next(updated);
  }

  updateMinifig(updatedMinifig: Minifig): void {
    const updated = this.minifigsSource.value.map(minifig =>
      minifig.id === updatedMinifig.id ? updatedMinifig : minifig
    );
    this.minifigsSource.next(updated);
  }

  setMinifigAsPurchased(boughtMinifig: Minifig): void {
    const updated = this.minifigsSource.value.map(minifig =>
      minifig.id === boughtMinifig.id
        ? { ...minifig, hasBeenBought: true }
        : minifig
    );

    this.minifigsSource.next(updated);
  }
}
