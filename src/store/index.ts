import { Product } from '@/types';
import { create } from 'zustand';

type StoreType = {
  cart: Product[];
  count: number;
  addOnCart: (item: Product) => void;
};

export const useStore = create<StoreType>()((set) => ({
  cart: [],
  count: 0,
  addOnCart: (item: Product) =>
    set((state) => ({ cart: [...state.cart, item], count: state.count + 1 })),
}));
