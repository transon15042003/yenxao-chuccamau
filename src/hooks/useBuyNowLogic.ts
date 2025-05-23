import { CartItem } from '@/types/cart';
import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';

import { useCart } from '@/components/providers/CartProvider/CartProvider';

interface UseBuyNowLogic {
  handleBuyNow: (product: Product, sku?: string, quantity?: number) => void;
}

const useBuyNowLogic = (): UseBuyNowLogic => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuyNow = (product: Product, sku?: string, quantity: number = 1) => {
    let cartItem: CartItem;

    if (sku) {
      const selectedVariant = product.variants.find((variant) => variant.sku === sku);

      if (selectedVariant) {
        cartItem = {
          productId: product.id,
          sku: selectedVariant.sku,
          name: selectedVariant.name,
          price: selectedVariant.price,
          quantity: quantity,
          specs: selectedVariant.specs,
          thumbnail: selectedVariant.thumbnail
        };
      } else {
        cartItem = {
          productId: product.id,
          sku: sku,
          name: product.name,
          price: product.price || 0,
          quantity: 1,
          specs: {},
          thumbnail: product.thumbnail
        };
      }
    } else {
      const lowestPriceVariant = product.variants.reduce((minVariant, currentVariant) => {
        return (currentVariant.price || 0) < (minVariant.price || 0) ? currentVariant : minVariant;
      }, product.variants[0]);

      const itemPrice = lowestPriceVariant ? lowestPriceVariant.price : product.price;
      const itemSku = lowestPriceVariant ? lowestPriceVariant.sku : '';
      const itemName = lowestPriceVariant ? lowestPriceVariant.name : product.name;
      const itemThumbnail = lowestPriceVariant ? lowestPriceVariant.thumbnail : product.thumbnail;
      const itemSpecs = lowestPriceVariant ? lowestPriceVariant.specs : {};

      cartItem = {
        productId: product.id,
        sku: itemSku,
        name: itemName,
        price: itemPrice || 0,
        quantity: quantity,
        specs: itemSpecs,
        thumbnail: itemThumbnail
      };
    }
    addToCart(cartItem);
    router.push('/order');
  };

  return { handleBuyNow };
};

export default useBuyNowLogic;
