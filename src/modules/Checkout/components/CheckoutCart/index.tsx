'use client';

import { Button } from '@/components/Ui';
import { useStore } from '@/store';
import React from 'react';
import CheckoutCartList from './components/CheckoutCartList';

export const CheckoutCart = () => {
  const cart = useStore((state) => state.cart);

  return (
    <div className="lg:w-1/3 w-full border p-4 flex flex-col">
      <h2 className="font-semibold text-xl text-gray-800">Order summary</h2>
      <div className="flex-1">
        <CheckoutCartList products={cart} />
      </div>
      <Button block variant="success">
        Confirm order
      </Button>
    </div>
  );
};
