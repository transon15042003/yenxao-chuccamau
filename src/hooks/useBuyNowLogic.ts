import { CartItem } from '@/types/cart';
import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';

import { useCart } from '@/components/providers/CartProvider/CartProvider';

import { convertProductToCartItem } from '@/lib/utils/product';

interface UseBuyNowLogic {
  handleBuyNow: (product: Product, sku?: string, quantity?: number) => void;
}

const useBuyNowLogic = (): UseBuyNowLogic => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuyNow = (product: Product, sku?: string, quantity: number = 1) => {
    let cartItem: CartItem;

    if (sku) {
      cartItem = convertProductToCartItem(product, sku);
      cartItem.quantity = quantity;
    } else {
      const sortedVariants = [...product.variants].sort((a, b) => (a.price || 0) - (b.price || 0));

      const lowestPriceSku = sortedVariants.length > 0 ? sortedVariants[0].sku : undefined;

      cartItem = convertProductToCartItem(product, lowestPriceSku);
      cartItem.quantity = quantity;
    }
    addToCart(cartItem, false);
    router.push('/order');
  };

  return { handleBuyNow };
};

export default useBuyNowLogic;
