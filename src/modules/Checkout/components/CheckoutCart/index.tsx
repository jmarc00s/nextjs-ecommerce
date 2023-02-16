'use client';

import { Button } from '@/components/Ui';
import { useStore } from '@/store';

import { formatToUSD } from '@/utils/formatters/toUSD';
import React from 'react';
import CheckoutCartList from './components/CheckoutCartList';

export const CheckoutCart = () => {
  const { cart, totalPrice } = useStore((state) => ({
    cart: state.cart,
    totalPrice: state.totalPrice,
  }));

  const totalInBRL = formatToUSD(totalPrice);
  const cartHasItems = cart.length;

  return (
    <div className="lg:w-1/3 w-full border p-4 flex flex-col">
      <h2 className="font-semibold text-xl text-gray-800">Order summary</h2>
      <div className="flex-1">
        <CheckoutCartList products={cart} />
      </div>
      <div className="divider"></div>
      <div className="flex justify-between mb-4">
        <span className="text-xs font-semibold">Total</span>
        <span className="text-xs font-semibold">{totalInBRL}</span>
      </div>
      <Button disabled={!cartHasItems} block variant="success">
        Confirm order
      </Button>
    </div>
  );
};
