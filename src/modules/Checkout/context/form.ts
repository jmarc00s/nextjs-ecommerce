import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFormContext } from 'react-hook-form';
import { DeliveryForm, deliveryFormSchema as schema } from '../schema';

export const useCheckoutForm = () =>
  useForm<DeliveryForm>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

export const useCheckoutFormContext = () => useFormContext<DeliveryForm>();
