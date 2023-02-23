'use client';

import React from 'react';
import { FormProvider } from 'react-hook-form';
import { useCheckoutForm } from '../../context/form';
import { DeliveryForm } from '../../schema';
import { CheckoutCart } from '../CheckoutCart';
import { CheckoutDelivery } from '../CheckoutDelivery';

export const CheckoutContainer = () => {
  const { ...methods } = useCheckoutForm();

  const onSubmit = (data: DeliveryForm) => {
    console.log(data);
  };

  return (
    <div className="flex justify-around flex-col lg:flex-row bg-base-100 gap-8 p-8 h-full">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex w-full">
          <CheckoutDelivery />
          <CheckoutCart />
        </form>
      </FormProvider>
    </div>
  );
};
