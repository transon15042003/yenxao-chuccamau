import { fakeMailAddress } from '@/services/notification.service';
import { Cart, CartItem } from '@/types/cart';
import { OrderCustomer } from '@/types/order';
import { HttpTypes } from '@medusajs/types';

import { addToCart, deleteLineItem, updateLineItem } from '@/lib/data/cart';
import { getProductVariantThumbnail, transformProduct } from '@/lib/medusa-adapter/product';

const generateCartItemOptionsFromProductOptions = (
  item: HttpTypes.StoreProduct
): CartItem['options'] => {
  return (
    item.options?.map((option) => {
      return {
        key: option.id,
        label: option.title,
        options:
          option.values?.map((value) => {
            return {
              key: value.id,
              label: value.value,
              value: value.id
            };
          }) || []
      };
    }) || []
  );
};

export const transformCartItem = (
  item: HttpTypes.StoreCartLineItem | HttpTypes.StoreOrderLineItem
): CartItem => {
  // If product data is missing, create a minimal product object with required fields
  const product = item.product || {
    id: item.product_id || '',
    title: item.title || '',
    handle: item.product_handle || '',
    thumbnail: '',
    options: [],
    variants: [],
    metadata: {}
  };

  const transformedProduct = transformProduct(product as HttpTypes.StoreProduct);

  return {
    productId: item.product_id || '',
    variantId: item.variant_id || '',
    lineId: item.id || '',
    productSlug: item.product_handle || '',
    sku: item.variant_sku || '',
    name: item.subtitle || item.variant_title || '',
    quantity: item.quantity,
    price: item.unit_price,
    specs: transformedProduct.variants.find((v) => v.sku === item.variant_sku)?.specs || {},
    thumbnail: getProductVariantThumbnail(
      product as HttpTypes.StoreProduct,
      item.variant_id as string
    ),
    options: generateCartItemOptionsFromProductOptions(product as HttpTypes.StoreProduct),
    variants: transformedProduct.variants
  };
};

// TODO: Implement data transformation for cart
export const transformCart = (cart: HttpTypes.StoreCart): Cart => {
  const result: Cart = {
    id: cart.id,
    total: cart.total || 0,
    items: []
  };

  // note: map cart from medusa to cart type
  const cartItems: CartItem[] = cart.items?.map(transformCartItem) || [];

  result.items = cartItems;

  return result as Cart;
};

export const isChangedCartItem = (cart: Cart, originalCart: HttpTypes.StoreCart) => {
  const originalCartItems = originalCart.items || [];

  const isNewVariantAdded = cart.items.some((item) => !item.lineId);

  const isChangedQuantity = cart.items.some((item) => {
    const existItem = originalCartItems.find((i) => i.id === item.lineId);

    return existItem && existItem.quantity !== item.quantity;
  });

  const isRemovedItem = originalCartItems.some((item) => {
    const existItem = cart.items.find((i) => i.lineId === item.id);

    return !existItem;
  });

  return isNewVariantAdded || isChangedQuantity || isRemovedItem;
};

export const updateCartItems = async (cart: Cart, originalCart: HttpTypes.StoreCart) => {
  const originalCartItems = originalCart.items || [];
  try {
    const toRemoveItems = originalCartItems.filter((item) => {
      const isExist = cart.items.find((i) => i.lineId === item.id);

      return !isExist;
    });

    const requests = toRemoveItems.map((item) => deleteLineItem(item.id));

    const toUpdateItems = cart.items.filter((item) => {
      const isExist = originalCartItems.find((i) => i.id === item.lineId);

      return isExist && isExist.quantity !== item.quantity;
    });

    requests.push(
      ...toUpdateItems.map((item) =>
        updateLineItem({
          lineId: item.lineId!,
          quantity: item.quantity
        })
      )
    );

    const toAddItems = cart.items.filter((item) => !item.lineId);

    requests.push(
      ...toAddItems.map((item) =>
        addToCart({
          variantId: item.variantId,
          quantity: item.quantity,
          countryCode: process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE!
        })
      )
    );
    // console.log('cartItems', cart.items);
    // console.log('originalCartItems', originalCartItems);
    // console.log(
    //   'Update cart items',
    //   requests.length,
    //   toRemoveItems.length,
    //   toUpdateItems.length,
    //   toAddItems.length
    // );
    const results = await Promise.allSettled(requests);
    const failedRequests = results.filter((result) => result.status === 'rejected');

    if (failedRequests.length > 0) {
      console.error(failedRequests.map((result) => result.reason));
      throw new Error('Failed to update cart');
    }

    return true;
  } catch (error) {
    console.error('Failed to update cart', error);

    return false;
  }
};

export const transfromCartShippingInfo = (orderCustomer: OrderCustomer): FormData => {
  const formData = new FormData();
  formData.append('shipping_address.first_name', orderCustomer.name);
  formData.append('shipping_address.last_name', '');
  const combinedAddress = `${orderCustomer.address}, ${orderCustomer.district}`;
  formData.append('shipping_address.address_1', combinedAddress);
  formData.append('shipping_address.postal_code', '');
  formData.append('shipping_address.city', '');
  formData.append('shipping_address.province', orderCustomer.province || '');
  formData.append(
    'shipping_address.country_code',
    process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE || ''
  );
  formData.append('shipping_address.phone', orderCustomer.phone);
  formData.append('email', orderCustomer.email || fakeMailAddress);

  formData.append('shipping_address.company', '');
  formData.append('same_as_billing', 'on');

  return formData;
};
