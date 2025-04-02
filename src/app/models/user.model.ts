import {Minifig} from './minifig.model';

export interface User {
  id: number;
  username: string;
  password: string;
  isLoggedIn: boolean;
  cart: Minifig[];
}
