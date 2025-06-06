import { Product } from '@/types/product';
import { HttpTypes } from '@medusajs/types';

// TODO: Implement data transformation for products
export const transformProduct = (product: HttpTypes.StoreProduct): Product => {
  const result = {
    id: product.id,
    name: product.title,
    slug: product.handle
  };

  return result as Product;
};
