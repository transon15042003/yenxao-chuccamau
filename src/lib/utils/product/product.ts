import { CartItem } from '@/types/cart';
import { Product, ProductVariant } from '@/types/product';

/**
 * Convert a product to a cart item
 * @param product - The product to convert
 * @param sku - The SKU of the product variant to convert
 * @returns The cart item
 */
export const convertProductToCartItem = (
  product: Product,
  sku?: string,
  quantity = 1
): CartItem => {
  const productVariant = sku
    ? (product.variants.find((variant) => variant.sku === sku) as ProductVariant)
    : product.variants[0];

  return {
    productId: product.id,
    variantId: productVariant.id,
    productSlug: product.slug,
    name: productVariant.name || product.name,
    price: productVariant.price,
    thumbnail: productVariant.thumbnail || product.thumbnail,
    quantity,
    sku: productVariant.sku,
    specs: productVariant.specs,
    options: product.options,
    variants: product.variants
  };
};
