'use client';

import { useStore } from '@/store';
import React from 'react';

export const CheckoutCart = () => {
  const cart = useStore((state) => state.cart);

  return (
    <div className="lg:w-1/3 w-full border p-4 ">
      <h2 className="font-semibold text-xl text-gray-800">Order summary</h2>
    </div>
  );
};
