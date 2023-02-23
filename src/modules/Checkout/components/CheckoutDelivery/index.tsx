'use client';

import React from 'react';

import { Input } from '@/components/Ui/Input';
import { DeliveryForm } from '../../schema';
import { useCheckoutFormContext } from '../../context/form';

export const CheckoutDelivery = () => {
  const {
    register,
    formState: { errors },
  } = useCheckoutFormContext();

  return (
    <div className="flex flex-col border p-4 lg:w-2/3 w-full">
      <h2 className="text-xl font-semibold text-gray-800">
        Delivery information
      </h2>

      <div className="flex mt-4 gap-4">
        <Input
          label="Name"
          {...register('name')}
          size="md"
          id="name"
          errorMessage={errors.name?.message}
        />
        <Input
          label="Mobile number"
          {...register('mobileNumber')}
          size="md"
          id="mobileNumber"
          errorMessage={errors.mobileNumber?.message}
        />
      </div>

      <div className="flex mt-4 gap-4">
        <Input
          label="Email"
          {...register('email')}
          size="md"
          id="email"
          errorMessage={errors.email?.message}
        />
        <Input
          label="City"
          {...register('city')}
          size="md"
          id="city"
          errorMessage={errors.city?.message}
        />
      </div>

      <div className="flex my-4 gap-4">
        <Input
          className="lg:w-2/3 w-full"
          label="Address"
          {...register('address')}
          size="md"
          id="address"
          errorMessage={errors.address?.message}
        />
        <Input
          className="lg:w-1/3 w-full"
          label="State"
          {...register('state')}
          size="md"
          id="state"
          errorMessage={errors.state?.message}
        />
      </div>
    </div>
  );
};
