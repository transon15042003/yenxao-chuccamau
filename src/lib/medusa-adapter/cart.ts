import { Cart } from '@/types/cart';
import { HttpTypes } from '@medusajs/types';

// TODO: Implement data transformation for cart
export const transformCart = (cart: HttpTypes.StoreCart): Cart => {
  const result = {
    id: cart.id,
    items: []
  };

  return result as Cart;
};
