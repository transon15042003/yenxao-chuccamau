import { CartItem } from '@/types/cart';

export type ShippingMethod = 'STANDARD' | 'WORKING_HOURS';
export type Order = {
  _id?: string;
  code: string;
  status: OrderStatus;
  items: CartItem[];
  customer: OrderCustomer;
  invoice?: OrderInvoice;
  note?: string;
  paymentStatus: OrderPaymentStatus;
  orderAt?: Date;
  shippingMethod: ShippingMethod;
};

export type OrderCustomer = {
  name: string;
  email?: string;
  phone: string;
  province?: string;
  district?: string;
  address: string;
};

export type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled';
export type OrderPaymentStatus = 'pending' | 'paid';
export type OrderInvoice = {
  name: string;
  email: string;
  taxCode: string;
  address: string;
};
