// app/hooks/useCartProducts.ts
import { getProductById } from '@/services/product.service';
import { Cart } from '@/types/cart';
import { Product } from '@/types/product';
import { useEffect, useState } from 'react';

/**
 * Custom hook to fetch detailed product information for items in the cart.
 * @param cart The cart object containing items (with productId).
 * @returns An object containing:
 * - productsData: A Map where key is productId and value is the Product object.
 * - isLoadingProducts: A boolean indicating if product data is currently being loaded.
 */
export const useCartProducts = (cart: Cart) => {
  const [productsData, setProductsData] = useState<Map<string, Product>>(new Map());
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  useEffect(() => {
    const fetchProductsForCart = async () => {
      setIsLoadingProducts(true);

      // Extract unique product IDs from cart items
      const uniqueProductIds = Array.from(new Set(cart.items.map((item) => item.productId)));

      // Fetch all unique products concurrently
      const fetchedProducts = await Promise.all(uniqueProductIds.map((id) => getProductById(id)));

      // Create a new Map to store fetched products for quick lookup
      const newProductsMap = new Map<string, Product>();
      fetchedProducts.forEach((product) => {
        if (product) {
          newProductsMap.set(product.id, product);
        }
      });

      setProductsData(newProductsMap);
      setIsLoadingProducts(false);
    };

    if (cart.items.length > 0) {
      fetchProductsForCart();
    } else {
      setProductsData(new Map());
      setIsLoadingProducts(false);
    }
  }, [cart.items]);

  return { productsData, isLoadingProducts };
};
