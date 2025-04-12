export interface Minifig {
  id: number;
  name: string;
  image: 'b2' | 'jarjar' | 'revan' | 'vader';
  price?: number;
  hasBeenBought: boolean;
}
