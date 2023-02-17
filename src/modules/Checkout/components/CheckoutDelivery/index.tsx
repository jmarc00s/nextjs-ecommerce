'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DeliveryForm, deliveryFormSchema } from './schema';
import { Input } from '@/components/Ui/Input';
import { Button } from '@/components/Ui';

export const CheckoutDelivery = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeliveryForm>({
    resolver: zodResolver(deliveryFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: DeliveryForm) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col border p-4 lg:w-2/3 w-full">
      <h2 className="text-xl font-semibold text-gray-800">
        Delivery information
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>
    </div>
  );
};
