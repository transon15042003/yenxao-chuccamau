'use server';

import { HttpTypes } from '@medusajs/types';

import { sdk } from '@/lib/medusa/medusa-config';
import medusaError from '@/lib/medusa/util/medusa-error';

import { getAuthHeaders, getCacheOptions } from './cookies';
import { listProducts } from './products';

export const retrieveOrder = async (id: string) => {
  const headers = {
    ...(await getAuthHeaders())
  };

  const next = {
    ...(await getCacheOptions('orders'))
  };

  const order = await sdk.client
    .fetch<HttpTypes.StoreOrderResponse>(`/store/orders/${id}`, {
      method: 'GET',
      query: {
        fields:
          '*payment_collections.payments,*items,*items.metadata,*items.variant,*items.product,+metadata'
      },
      headers,
      next,
      cache: 'no-store'
    })
    .then(({ order }) => order)
    .catch((err) => medusaError(err));

  const productIds = new Set([...Array.from(order?.items?.map((item) => item.product_id!) || [])]);

  const getProducts = await listProducts({
    queryParams: {
      limit: productIds.size,
      id: Array.from(productIds),
      fields:
        '*metadata,' +
        '*tags,' +
        '*images,' +
        '*options,' +
        '*variants.calculated_price,' +
        '*variants.inventory_quantity,' +
        '*options.values,' +
        '*variants,' +
        '*variants.options'
    },
    countryCode: process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE
  });

  // mapping product to cart.product
  const products = getProducts.response.products;

  if (order && products) {
    order.items =
      order?.items?.map((item) => ({
        ...item,
        product: products.find((product) => product.id === item.product_id)
      })) || [];
  }

  return order;
};

export const listOrders = async (
  limit: number = 10,
  offset: number = 0,
  filters?: Record<string, unknown>
) => {
  const headers = {
    ...(await getAuthHeaders())
  };

  const next = {
    ...(await getCacheOptions('orders'))
  };

  return sdk.client
    .fetch<HttpTypes.StoreOrderListResponse>(`/store/orders`, {
      method: 'GET',
      query: {
        limit,
        offset,
        order: '-created_at',
        fields: '*items,+items.metadata,*items.variant,*items.product',
        ...filters
      },
      headers,
      next,
      cache: 'no-store'
    })
    .then(({ orders }) => orders)
    .catch((err) => medusaError(err));
};

export const createTransferRequest = async (
  state: {
    success: boolean;
    error: string | null;
    order: HttpTypes.StoreOrder | null;
  },
  formData: FormData
): Promise<{
  success: boolean;
  error: string | null;
  order: HttpTypes.StoreOrder | null;
}> => {
  const id = formData.get('order_id') as string;

  if (!id) {
    return { success: false, error: 'Order ID is required', order: null };
  }

  const headers = await getAuthHeaders();

  return await sdk.store.order
    .requestTransfer(
      id,
      {},
      {
        fields: 'id, email'
      },
      headers
    )
    .then(({ order }) => ({ success: true, error: null, order }))
    .catch((err) => ({ success: false, error: err.message, order: null }));
};

export const acceptTransferRequest = async (id: string, token: string) => {
  const headers = await getAuthHeaders();

  return await sdk.store.order
    .acceptTransfer(id, { token }, {}, headers)
    .then(({ order }) => ({ success: true, error: null, order }))
    .catch((err) => ({ success: false, error: err.message, order: null }));
};

export const declineTransferRequest = async (id: string, token: string) => {
  const headers = await getAuthHeaders();

  return await sdk.store.order
    .declineTransfer(id, { token }, {}, headers)
    .then(({ order }) => ({ success: true, error: null, order }))
    .catch((err) => ({ success: false, error: err.message, order: null }));
};
