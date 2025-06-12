'use client';
import type { Cart, CartItem } from '@/types/cart';
import { ProductVariant } from '@/types/product';
import { HttpTypes } from '@medusajs/types';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { retrieveCart } from '@/lib/data/cart';
import { createCartHybrid } from '@/lib/data/cart-hybrid';
import { transformCart } from '@/lib/medusa-adapter/cart';

type CartContextType = {
  cart: Cart;
  originalCart: HttpTypes.StoreCart | null;
  addToCart: (item: CartItem, autoOpenCart?: boolean) => void;
  increaseQuantity: (variantId: string, quantity: number) => void;
  decreaseQuantity: (variantId: string, quantity: number) => void;
  removeFromCart: (variantId: string) => void;
  updateCartItemVariant: (
    productId: string,
    currentSku: string,
    newVariant: ProductVariant
  ) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  fetchCartData: () => void;
};

const defaultCart = {
  total: 0,
  items: []
};

const CartContext = createContext<CartContextType>({
  cart: defaultCart,
  originalCart: null,
  addToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeFromCart: () => {},
  updateCartItemVariant: () => {},
  clearCart: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  fetchCartData: () => {}
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [originalCart, setOriginalCart] = useState<HttpTypes.StoreCart | null>(null);
  const [cart, setCart] = useLocalStorage<Cart>('cart', defaultCart, {
    initializeWithValue: false,
    deserializer: (value) => {
      const parsed = JSON.parse(value);

      return {
        ...parsed,
        items: parsed.items.filter((i: CartItem) => !!i)
      };
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = async (item: CartItem, autoOpenCart: boolean = true) => {
    if (!cart.id) {
      const cartData = await createCartHybrid(process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE || '');
      setCart((prev) => ({
        ...prev,
        id: cartData.id
      }));
      setOriginalCart(cartData);
    }

    const existingItemIndex = cart.items.findIndex(
      (cartItem) => cartItem.productId === item.productId && cartItem.sku === item.sku
    );

    if (existingItemIndex > -1) {
      setCart((prev) => ({
        ...prev,
        items: prev.items.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      }));
    } else {
      setCart((prev) => ({ ...prev, items: [...prev.items, item] }));
    }

    // note: open the cart after adding to cart
    if (autoOpenCart) {
      setIsCartOpen(true);
    }
  };

  const increaseQuantity = (variantId: string, quantity: number) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.variantId === variantId ? { ...item, quantity: item.quantity + quantity } : item
      )
    }));
  };

  const decreaseQuantity = (variantId: string, quantity: number) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.variantId === variantId ? { ...item, quantity: item.quantity - quantity } : item
      )
    }));
  };

  const removeFromCart = (variantId: string) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.variantId !== variantId)
    }));
  };

  const updateCartItemVariant = (
    productId: string,
    currentVariantId: string,
    newVariant: ProductVariant
  ) => {
    const currentItem = cart.items.find((i) => i.variantId === currentVariantId);
    const existItem = cart.items.find((i) => i.variantId === newVariant.id);

    if (!currentItem) {
      return;
    }

    if (existItem) {
      // merged new variant to exist item
      setCart((prev) => ({
        ...prev,
        items: prev.items
          .map((item) =>
            item.variantId === existItem.variantId
              ? { ...item, quantity: item.quantity + currentItem.quantity }
              : item
          )
          .filter((i) => i.variantId !== currentItem.variantId)
      }));
    } else {
      // add new variant to cart
      const clonedItem = currentItem;

      if (!clonedItem) {
        return;
      }

      // remove lineId to avoid update cart item (see @/lib/medusa-adapter/cart.ts )
      delete clonedItem.lineId;

      // replace item with new variant
      setCart((prev) => ({
        ...prev,
        items: prev.items
          .map((item) =>
            item.productId === productId && item.variantId === currentItem?.variantId
              ? {
                  ...clonedItem,
                  variantId: newVariant.id,
                  name: newVariant.name,
                  price: newVariant.price,
                  thumbnail: newVariant.thumbnail,
                  quantity: currentItem.quantity,
                  sku: newVariant.sku,
                  specs: newVariant.specs
                }
              : item
          )
          .filter((i) => i.variantId !== currentItem.variantId)
      }));
    }
  };

  const clearCart = () => {
    setCart((prev) => ({
      ...prev,
      items: []
    }));
  };

  const fetchCartData = async () => {
    const cartData = await retrieveCart();
    if (!cartData) {
      return;
    }

    setOriginalCart(cartData);

    const transformedCart = transformCart(cartData);
    // setCart(transformedCart);
    setCart((prev) => {
      if (!prev.id) {
        return transformedCart;
      }

      return {
        ...prev,
        items: prev.items.map((pItem) => {
          const itemWithUpdatedInfo = transformedCart.items?.find(
            (cItem) => cItem.variantId === pItem.variantId
          );
          if (!pItem.lineId) {
            return itemWithUpdatedInfo!;
          }

          return itemWithUpdatedInfo || pItem;
        })
      };
    });
  };

  // useEffect(() => {
  //   fetchCartData();
  // }, []);

  // useEffect(() => {
  //   if (originalCart && isChangedCartItem(cart, originalCart)) {
  //     updateCartItems(cart, originalCart)
  //       .catch(() => {
  //         toast.error('Xảy ra lỗi khi cập nhật giỏ hàng, vui lòng thử lại');
  //       })
  //       .finally(() => {
  //         fetchCartData();
  //       });
  //   }
  // }, [cart, originalCart]);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isCartOpen]);

  return (
    <CartContext.Provider
      value={{
        cart,
        originalCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        updateCartItemVariant,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        fetchCartData
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return ctx;
};
