import { z } from 'zod';

const contactInfoSchema = z.object({
  phone: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
});

const shippingAddressSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  address1: z.string().min(1, 'Address line 1 is required'),
  address2: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State/Province is required'),
  postalCode: z.string().min(1, 'Postal code is required'),
  country: z.string().min(1, 'Country is required'),
});

const paymentSchema = z.object({
  cardNumber: z.string().min(1, 'Card number is required'),
  cardName: z.string().min(1, 'Name on the card is required'),
  expirationDate: z.string().min(1, 'Expiration date is required'),
  cvc: z.string().min(1, 'CVC is required'),
});

export const checkoutSchema = z.object({
  contactInfo: contactInfoSchema,
  shippingAddress: shippingAddressSchema,
  payment: paymentSchema,
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
