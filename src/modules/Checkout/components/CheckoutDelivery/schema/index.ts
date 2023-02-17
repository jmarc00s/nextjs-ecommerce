import { INVALID_EMAIL, REQUIRED_ERROR } from '@/utils/validation/messages';
import { z } from 'zod';

export const deliveryFormSchema = z.object({
  name: z.string().min(1, REQUIRED_ERROR),
  mobileNumber: z.string().min(1, REQUIRED_ERROR),
  email: z.string().email(INVALID_EMAIL).min(1, REQUIRED_ERROR),
  city: z.string().min(1, REQUIRED_ERROR),
  state: z.string().min(1, REQUIRED_ERROR).max(2),
  address: z.string().min(1, REQUIRED_ERROR),
});

export type DeliveryForm = z.infer<typeof deliveryFormSchema>;
