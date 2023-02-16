import { CartProduct, Product } from '@/types';
import { create } from 'zustand';

type StoreType = {
  cart: CartProduct[];
  count: number;
  totalPrice: number;
  addOnCart: (item: Product) => void;
};

export const useStore = create<StoreType>()((set) => ({
  cart: [],
  count: 0,
  totalPrice: 0,
  addOnCart: (newProduct: Product) =>
    set((state) => {
      let cart = state.cart;
      let productOnCart = state.cart.find(
        (item) => item.product.id === newProduct.id
      );

      if (productOnCart) {
        const newProductOnCart = {
          ...productOnCart,
          quantity: productOnCart.quantity + 1,
          totalPrice: productOnCart.totalPrice + productOnCart.product.price,
        };

        cart.splice(cart.indexOf(productOnCart), 1, newProductOnCart);

        return {
          cart,
          count: state.count + 1,
          totalPrice: state.totalPrice + newProduct.price,
        };
      }

      return {
        cart: [
          ...state.cart,
          { product: newProduct, quantity: 1, totalPrice: newProduct.price },
        ],
        count: state.count + 1,
      };
    }),
}));
