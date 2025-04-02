import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {Minifig} from '../models/minifig.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User | null = null;

  private readonly users = [
    { id: 1, username: 'admin', password: 'admin123', isLoggedIn: false, cart: [] as Minifig[] }
  ];

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      this.user = { ...user, isLoggedIn: true };
      localStorage.setItem('user', JSON.stringify(this.user));
      return true;
    }

    return false;
  }

  logout(): void {
    this.user = null;
    localStorage.removeItem('user');
  }

  getUser(): User | null {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      return { ...parsedUser, cart: parsedUser.cart || [] };
    }
    return null;
  }

  isAuthenticated(): boolean {
    return this.getUser() !== null;
  }
}
