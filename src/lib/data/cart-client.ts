import { HttpTypes } from '@medusajs/types';

import { sdk } from '@/lib/medusa/medusa-config';

import { getRegionClient } from './regions-client';

/**
 * Retrieves a cart by its ID. If no ID is provided, it will use the cart ID from the cookies.
 * @param cartId - optional - The ID of the cart to retrieve.
 * @returns The cart object if found, or null if not found.
 */
export async function retrieveCartClient(cartId?: string) {
  const id = cartId;

  if (!id) {
    return null;
  }

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
      }
    })
    .then(({ cart }) => cart)
    .catch(() => null);

  // const productIds = new Set([...Array.from(cart?.items?.map((item) => item.product_id!) || [])]);

  // const getProducts = await listProductsClient({
  //   queryParams: {
  //     limit: productIds.size,
  //     id: Array.from(productIds),
  //     fields:
  //       '*metadata,' +
  //       '*tags,' +
  //       '*images,' +
  //       '*options,' +
  //       '*variants.calculated_price,' +
  //       '*variants.inventory_quantity,' +
  //       '*options.values,' +
  //       '*variants,' +
  //       '*variants.options'
  //   },
  //   countryCode: process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE
  // });

  // mapping product to cart.product
  // const products = getProducts.response.products;

  // if (cart && products) {
  //   cart.items = cart?.items?.map((item) => ({
  //     ...item,
  //     product: products.find((product) => product.id === item.product_id)
  //   }));
  // }

  return cart;
}

export async function createCartClient(countryCode: string) {
  const region = await getRegionClient(countryCode).catch(console.error);

  if (!region) {
    throw new Error(`Region not found for country code: ${countryCode}`);
  }

  let cart = await retrieveCartClient();

  if (!cart) {
    const cartResp = await sdk.store.cart.create({ region_id: region.id }, {});
    cart = cartResp.cart;
  }

  if (cart && cart?.region_id !== region.id) {
    await sdk.store.cart.update(cart.id, { region_id: region.id }, {});
  }

  return cart;
}
