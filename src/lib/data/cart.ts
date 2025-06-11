/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { sendOrderNotification } from '@/services/notification.service';
import { Order } from '@/types/order';
import { HttpTypes } from '@medusajs/types';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

import { sdk } from '@/lib/medusa/medusa-config';
import medusaError from '@/lib/medusa/util/medusa-error';

import { transfromCartShippingInfo } from '../medusa-adapter/cart';
import { transformOrder } from '../medusa-adapter/order';
import {
  getAuthHeaders,
  getCacheOptions,
  getCacheTag,
  getCartId,
  removeCartId,
  setCartId
} from './cookies';
import { retrieveOrder } from './orders';
import { listProducts } from './products';
import { getRegion } from './regions';

/**
 * Retrieves a cart by its ID. If no ID is provided, it will use the cart ID from the cookies.
 * @param cartId - optional - The ID of the cart to retrieve.
 * @returns The cart object if found, or null if not found.
 */
export async function retrieveCart(cartId?: string) {
  const id = cartId || (await getCartId());

  if (!id) {
    return null;
  }

  const headers = {
    ...(await getAuthHeaders())
  };

  const next = {
    ...(await getCacheOptions('carts'))
  };

  const cart = await sdk.client
    .fetch<HttpTypes.StoreCartResponse>(`/store/carts/${id}`, {
      method: 'GET',
      query: {
        fields:
          '*items,' +
          '*region,' +
          '*items.product,' +
          '*items.thumbnail,' +
          '*items.metadata,' +
          '+items.total,' +
          '*promotions,' +
          '+shipping_methods.name'
      },
      headers,
      next,
      cache: 'no-store'
    })
    .then(({ cart }) => cart)
    .catch(() => null);

  const productIds = new Set([...Array.from(cart?.items?.map((item) => item.product_id!) || [])]);

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

  if (cart && products) {
    cart.items = cart?.items?.map((item) => ({
      ...item,
      product: products.find((product) => product.id === item.product_id)
    }));
  }

  return cart;
}

export async function getOrSetCart(countryCode: string) {
  const region = await getRegion(countryCode);

  if (!region) {
    throw new Error(`Region not found for country code: ${countryCode}`);
  }

  let cart = await retrieveCart();

  const headers = {
    ...(await getAuthHeaders())
  };

  if (!cart) {
    const cartResp = await sdk.store.cart.create({ region_id: region.id }, {}, headers);
    cart = cartResp.cart;

    await setCartId(cart.id);

    const cartCacheTag = await getCacheTag('carts');
    revalidateTag(cartCacheTag);
  }

  if (cart && cart?.region_id !== region.id) {
    await sdk.store.cart.update(cart.id, { region_id: region.id }, {}, headers);
    const cartCacheTag = await getCacheTag('carts');
    revalidateTag(cartCacheTag);
  }

  return cart;
}

export async function updateCart(data: HttpTypes.StoreUpdateCart) {
  const cartId = await getCartId();

  if (!cartId) {
    throw new Error('No existing cart found, please create one before updating');
  }

  const headers = {
    ...(await getAuthHeaders())
  };

  return sdk.store.cart
    .update(cartId, data, {}, headers)
    .then(async ({ cart }) => {
      const cartCacheTag = await getCacheTag('carts');
      revalidateTag(cartCacheTag);

      const fulfillmentCacheTag = await getCacheTag('fulfillment');
      revalidateTag(fulfillmentCacheTag);

      return cart;
    })
    .catch(medusaError);
}

export async function addToCart({
  variantId,
  quantity,
  countryCode
}: {
  variantId: string;
  quantity: number;
  countryCode: string;
}) {
  if (!variantId) {
    throw new Error('Missing variant ID when adding to cart');
  }

  const cart = await getOrSetCart(countryCode);

  if (!cart) {
    throw new Error('Error retrieving or creating cart');
  }

  const headers = {
    ...(await getAuthHeaders())
  };

  await sdk.store.cart
    .createLineItem(
      cart.id,
      {
        variant_id: variantId,
        quantity
      },
      {},
      headers
    )
    .then(async () => {
      const cartCacheTag = await getCacheTag('carts');
      revalidateTag(cartCacheTag);

      const fulfillmentCacheTag = await getCacheTag('fulfillment');
      revalidateTag(fulfillmentCacheTag);
    })
    .catch(medusaError);
}

export async function updateLineItem({ lineId, quantity }: { lineId: string; quantity: number }) {
  if (!lineId) {
    throw new Error('Missing lineItem ID when updating line item');
  }

  const cartId = await getCartId();

  if (!cartId) {
    throw new Error('Missing cart ID when updating line item');
  }

  const headers = {
    ...(await getAuthHeaders())
  };

  await sdk.store.cart
    .updateLineItem(cartId, lineId, { quantity }, {}, headers)
    .then(async () => {
      const cartCacheTag = await getCacheTag('carts');
      revalidateTag(cartCacheTag);

      const fulfillmentCacheTag = await getCacheTag('fulfillment');
      revalidateTag(fulfillmentCacheTag);
    })
    .catch(medusaError);
}

export async function deleteLineItem(lineId: string) {
  if (!lineId) {
    throw new Error('Missing lineItem ID when deleting line item');
  }

  const cartId = await getCartId();

  if (!cartId) {
    throw new Error('Missing cart ID when deleting line item');
  }

  const headers = {
    ...(await getAuthHeaders())
  };

  await sdk.store.cart
    .deleteLineItem(cartId, lineId, headers)
    .then(async () => {
      const cartCacheTag = await getCacheTag('carts');
      revalidateTag(cartCacheTag);

      const fulfillmentCacheTag = await getCacheTag('fulfillment');
      revalidateTag(fulfillmentCacheTag);
    })
    .catch(medusaError);
}

export async function setShippingMethod({
  cartId,
  shippingMethodId
}: {
  cartId: string;
  shippingMethodId: string;
}) {
  const headers = {
    ...(await getAuthHeaders())
  };

  return sdk.store.cart
    .addShippingMethod(cartId, { option_id: shippingMethodId }, {}, headers)
    .then(async () => {
      const cartCacheTag = await getCacheTag('carts');
      revalidateTag(cartCacheTag);
    })
    .catch(medusaError);
}

export async function initiatePaymentSession(
  cart: HttpTypes.StoreCart,
  data: HttpTypes.StoreInitializePaymentSession
) {
  const headers = {
    ...(await getAuthHeaders())
  };

  return sdk.store.payment
    .initiatePaymentSession(cart, data, {}, headers)
    .then(async (resp) => {
      const cartCacheTag = await getCacheTag('carts');
      revalidateTag(cartCacheTag);

      return resp;
    })
    .catch(medusaError);
}

export async function applyPromotions(codes: string[]) {
  const cartId = await getCartId();

  if (!cartId) {
    throw new Error('No existing cart found');
  }

  const headers = {
    ...(await getAuthHeaders())
  };

  return sdk.store.cart
    .update(cartId, { promo_codes: codes }, {}, headers)
    .then(async () => {
      const cartCacheTag = await getCacheTag('carts');
      revalidateTag(cartCacheTag);

      const fulfillmentCacheTag = await getCacheTag('fulfillment');
      revalidateTag(fulfillmentCacheTag);
    })
    .catch(medusaError);
}

export async function applyGiftCard(code: string) {
  //   const cartId = getCartId()
  //   if (!cartId) return "No cartId cookie found"
  //   try {
  //     await updateCart(cartId, { gift_cards: [{ code }] }).then(() => {
  //       revalidateTag("cart")
  //     })
  //   } catch (error: any) {
  //     throw error
  //   }
}

export async function removeDiscount(code: string) {
  // const cartId = getCartId()
  // if (!cartId) return "No cartId cookie found"
  // try {
  //   await deleteDiscount(cartId, code)
  //   revalidateTag("cart")
  // } catch (error: any) {
  //   throw error
  // }
}

export async function removeGiftCard(
  codeToRemove: string,
  giftCards: any[]
  // giftCards: GiftCard[]
) {
  //   const cartId = getCartId()
  //   if (!cartId) return "No cartId cookie found"
  //   try {
  //     await updateCart(cartId, {
  //       gift_cards: [...giftCards]
  //         .filter((gc) => gc.code !== codeToRemove)
  //         .map((gc) => ({ code: gc.code })),
  //     }).then(() => {
  //       revalidateTag("cart")
  //     })
  //   } catch (error: any) {
  //     throw error
  //   }
}

export async function submitPromotionForm(currentState: unknown, formData: FormData) {
  const code = formData.get('code') as string;
  try {
    await applyPromotions([code]);
  } catch (e: any) {
    return e.message;
  }
}

// TODO: Pass a POJO instead of a form entity here
export async function setAddresses(currentState: unknown, formData: FormData) {
  try {
    if (!formData) {
      throw new Error('No form data found when setting addresses');
    }
    const cartId = getCartId();
    if (!cartId) {
      throw new Error('No existing cart found when setting addresses');
    }

    const data = {
      shipping_address: {
        first_name: formData.get('shipping_address.first_name'),
        last_name: formData.get('shipping_address.last_name'),
        address_1: formData.get('shipping_address.address_1'),
        address_2: '',
        company: formData.get('shipping_address.company'),
        postal_code: formData.get('shipping_address.postal_code'),
        city: formData.get('shipping_address.city'),
        country_code: formData.get('shipping_address.country_code'),
        province: formData.get('shipping_address.province'),
        phone: formData.get('shipping_address.phone')
      },
      email: formData.get('email')
    } as any;

    const sameAsBilling = formData.get('same_as_billing');
    if (sameAsBilling === 'on') data.billing_address = data.shipping_address;

    if (sameAsBilling !== 'on')
      data.billing_address = {
        first_name: formData.get('billing_address.first_name'),
        last_name: formData.get('billing_address.last_name'),
        address_1: formData.get('billing_address.address_1'),
        address_2: '',
        company: formData.get('billing_address.company'),
        postal_code: formData.get('billing_address.postal_code'),
        city: formData.get('billing_address.city'),
        country_code: formData.get('billing_address.country_code'),
        province: formData.get('billing_address.province'),
        phone: formData.get('billing_address.phone')
      };
    await updateCart(data);
  } catch (e: any) {
    return e.message;
  }
}

/**
 * Places an order for a cart. If no cart ID is provided, it will use the cart ID from the cookies.
 * @param cartId - optional - The ID of the cart to place an order for.
 * @returns The cart object if the order was successful, or null if not.
 */
export async function placeOrder(cartId?: string) {
  const id = cartId || (await getCartId());

  if (!id) {
    throw new Error('No existing cart found when placing an order');
  }

  const headers = {
    ...(await getAuthHeaders())
  };

  const cartRes = await sdk.store.cart
    .complete(id, {}, headers)
    .then(async (cartRes) => {
      const cartCacheTag = await getCacheTag('carts');
      revalidateTag(cartCacheTag);

      return cartRes;
    })
    .catch(medusaError);

  if (cartRes?.type === 'order') {
    const orderCacheTag = await getCacheTag('orders');
    revalidateTag(orderCacheTag);

    removeCartId();

    const order = await retrieveOrder(cartRes?.order.id);
    cartRes.order = order;
  }

  return cartRes;
}

/**
 * Updates the countrycode param and revalidates the regions cache
 * @param regionId
 * @param countryCode
 */
export async function updateRegion(countryCode: string, currentPath: string) {
  const cartId = await getCartId();
  const region = await getRegion(countryCode);

  if (!region) {
    throw new Error(`Region not found for country code: ${countryCode}`);
  }

  if (cartId) {
    await updateCart({ region_id: region.id });
    const cartCacheTag = await getCacheTag('carts');
    revalidateTag(cartCacheTag);
  }

  const regionCacheTag = await getCacheTag('regions');
  revalidateTag(regionCacheTag);

  const productsCacheTag = await getCacheTag('products');
  revalidateTag(productsCacheTag);

  redirect(`/${countryCode}${currentPath}`);
}

export async function listCartOptions() {
  const cartId = await getCartId();
  const headers = {
    ...(await getAuthHeaders())
  };
  const next = {
    ...(await getCacheOptions('shippingOptions'))
  };

  return await sdk.client.fetch<{
    shipping_options: HttpTypes.StoreCartShippingOption[];
  }>('/store/shipping-options', {
    query: { cart_id: cartId },
    next,
    headers,
    cache: 'no-store'
  });
}

export async function updateCartAndTakeOrderFlow(order: Order) {
  const addToCartRequest = order.items.map((i) => {
    return addToCart({
      variantId: i.variantId,
      quantity: i.quantity,
      countryCode: process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE || 'vn'
    });
  });

  const addToCartResponse = await Promise.allSettled(addToCartRequest);
  if (addToCartResponse.some((r) => r.status === 'rejected')) {
    throw new Error('Error adding items to cart');
  }

  const cart = await getOrSetCart(process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE || 'vn');

  // 1. update cart customer
  const shippingAddressFormData = transfromCartShippingInfo(order.customer);
  await setAddresses({}, shippingAddressFormData);

  // 2. save cart metadata
  const cartMetadata: Record<string, string | undefined> = {
    payment_method: order.paymentMethod,
    shipping_method: order.shippingMethod,
    ...(order.invoice
      ? {
          invoice_name: order.invoice?.name,
          invoice_email: order.invoice?.email,
          invoice_tax_code: order.invoice?.taxCode,
          invoice_address: order.invoice?.address
        }
      : {}),
    ...(order.note ? { note: order.note } : {})
  };

  await updateCart({
    metadata: cartMetadata
  });

  // 3. update cart shipping
  const shippingOptionsResult = await listCartOptions();
  if (!shippingOptionsResult || shippingOptionsResult.shipping_options.length === 0) {
    toast.error('Vui lòng chọn phương thức vận chuyển');
  }

  const cartShippingMethod = shippingOptionsResult.shipping_options[0];
  await setShippingMethod({
    cartId: cart.id!,
    shippingMethodId: cartShippingMethod.id
  });

  // 4.update cart payment method
  const currentCart = await retrieveCart();
  if (currentCart) {
    // const paymentMethods = await listCartPaymentMethods(originalCart?.region?.id ?? '');
    await initiatePaymentSession(currentCart, {
      provider_id: 'pp_system_default'
    });
  }

  // 5. create order
  const placeOrderResponse = await placeOrder(cart.id!);

  return placeOrderResponse;
}
