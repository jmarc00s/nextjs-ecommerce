'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DeliveryForm, deliveryFormSchema } from './schema';

export const CheckoutDelivery = () => {
  const {
    register,
    formState: { errors },
  } = useForm<DeliveryForm>({ resolver: zodResolver(deliveryFormSchema) });

  return (
    <div className="flex flex-col border p-4 lg:w-2/3 w-full">
      <h2 className="text-xl font-semibold text-gray-800">
        Delivery information
      </h2>
    </div>
  );
};
