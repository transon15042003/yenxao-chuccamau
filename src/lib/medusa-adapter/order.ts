import { Order, OrderStatus as InternalOrderStatus, ShippingMethod } from '@/types/order';
import { HttpTypes, OrderStatus } from '@medusajs/types';

import { transformCartItem } from '@/lib/medusa-adapter/cart';

const statusMap: Record<OrderStatus, InternalOrderStatus> = {
  pending: 'pending',
  draft: 'pending',
  archived: 'pending',
  requires_action: 'pending',
  completed: 'completed',
  canceled: 'cancelled'
};

export const transformOrder = (order: HttpTypes.StoreOrder): Order => {
  const { shipping_address, status, payment_status, metadata } = order;

  return {
    code: order.id,
    status: statusMap[status as OrderStatus],
    paymentStatus: payment_status === 'captured' ? 'paid' : 'pending',
    items: order.items?.map(transformCartItem) || [],
    customer: {
      name: shipping_address?.first_name || shipping_address?.last_name || '',
      address: shipping_address?.address_1 || shipping_address?.address_2 || '',
      phone: shipping_address?.phone || '',
      province: shipping_address?.province || '',
      email: order.email || ''
    },
    shippingMethod:
      (metadata?.shipping_method as ShippingMethod) === 'STANDARD' ? 'STANDARD' : 'WORKING_HOURS'
  };
};
