import React from 'react';
import { CheckoutCart } from '../CheckoutCart';
import { CheckoutDelivery } from '../CheckoutDelivery';

export const CheckoutContainer = () => {
  return (
    <div className="flex justify-around flex-col lg:flex-row bg-base-100 gap-8 p-8 h-full">
      <CheckoutDelivery />
      <CheckoutCart />
    </div>
  );
};
