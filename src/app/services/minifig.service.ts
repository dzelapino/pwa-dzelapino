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
    const storedMinifigs = localStorage.getItem(this.localStorageKey);
    return storedMinifigs ? JSON.parse(storedMinifigs) : [
      { id: 1, name: 'Darth Vader', theme: 'Star Wars', price: 49.99 },
      { id: 2, name: 'Harry Potter', theme: 'Harry Potter', price: 39.99 },
      { id: 3, name: 'Spider-Man', theme: 'Marvel', price: 29.99 },
      { id: 4, name: 'Astronaut', theme: 'City', price: 19.99 }
    ];
  }

  private saveMinifigs(minifigs: Minifig[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(minifigs));
  }

  addMinifig(minifig: Minifig): void {
    const currentMinifigs = this.minifigsSource.value;
    const updatedMinifigs = [...currentMinifigs, minifig];
    this.minifigsSource.next(updatedMinifigs);
    this.saveMinifigs(updatedMinifigs);
  }

  deleteMinifig(id: number): void {
    const updatedMinifigs = this.minifigsSource.value.filter(m => m.id !== id);
    this.minifigsSource.next(updatedMinifigs);
    this.saveMinifigs(updatedMinifigs);
  }

  updateMinifig(updatedMinifig: Minifig): void {
    const updatedMinifigs = this.minifigsSource.value.map(minifig =>
      minifig.id === updatedMinifig.id ? updatedMinifig : minifig
    );
    this.minifigsSource.next(updatedMinifigs);
    this.saveMinifigs(updatedMinifigs);
  }
}
