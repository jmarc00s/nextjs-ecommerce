import { CartProduct, Product } from '@/types';
import { create } from 'zustand';

type StoreType = {
  cart: CartProduct[];
  count: number;
  totalPrice: number;
  addOnCart: (item: Product) => void;
  increaseQuantity: (id: Product['id']) => void;
  decreaseQuantity: (id: Product['id']) => void;
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

      const partialState = {
        count: state.count + 1,
        totalPrice: state.totalPrice + newProduct.price,
      };

      if (productOnCart) {
        const newProductOnCart = {
          ...productOnCart,
          quantity: productOnCart.quantity + 1,
          totalPrice: productOnCart.totalPrice + productOnCart.product.price,
        };

        cart.splice(cart.indexOf(productOnCart), 1, newProductOnCart);

        return {
          ...partialState,
          cart,
        };
      }

      return {
        ...partialState,
        cart: [
          ...state.cart,
          { product: newProduct, quantity: 1, totalPrice: newProduct.price },
        ],
      };
    }),
  increaseQuantity: (id: Product['id']) =>
    set((state) => {
      const productOnCart = state.cart.find((item) => item.product.id === id);
      if (!productOnCart) return state;

      let cart = state.cart;

      const newProduct = {
        ...productOnCart,
        quantity: productOnCart.quantity + 1,
        totalPrice: productOnCart.totalPrice + productOnCart.product.price,
      };

      cart.splice(cart.indexOf(productOnCart), 1, newProduct);

      return {
        ...state,
        count: state.count + 1,
        cart,
        totalPrice: state.totalPrice + productOnCart.product.price,
      };
    }),
  decreaseQuantity: (id: Product['id']) =>
    set((state) => {
      const productOnCart = state.cart.find((item) => item.product.id === id);
      if (!productOnCart) return state;

      let cart = state.cart;
      const productPrice = productOnCart.product.price;

      const newProduct = {
        ...productOnCart,
        quantity: productOnCart.quantity - 1,
        totalPrice: productOnCart.totalPrice - productPrice,
      };

      cart.splice(cart.indexOf(productOnCart), 1, newProduct);

      return {
        ...state,
        count: state.count - 1,
        cart,
        totalPrice: state.totalPrice - productPrice,
      };
    }),
}));
