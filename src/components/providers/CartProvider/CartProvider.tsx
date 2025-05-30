'use client';
import type { Cart, CartItem } from '@/types/cart';
import { ProductVariant } from '@/types/product';
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

type CartContextType = {
  cart: Cart;
  addToCart: (item: CartItem, autoOpenCart?: boolean) => void;
  increaseQuantity: (sku: string, quantity: number) => void;
  decreaseQuantity: (sku: string, quantity: number) => void;
  removeFromCart: (sku: string) => void;
  updateCartItemVariant: (
    productId: string,
    currentSku: string,
    newVariant: ProductVariant
  ) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
};

const CartContext = createContext<CartContextType>({
  cart: { items: [] },
  addToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeFromCart: () => {},
  updateCartItemVariant: () => {},
  clearCart: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {}
});

const INITIAL_CART_ITEMS: CartItem[] = [];

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useLocalStorage<Cart>(
    'cart',
    {
      items: INITIAL_CART_ITEMS
    },
    { initializeWithValue: false }
  );
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: CartItem, autoOpenCart: boolean = true) => {
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

  const increaseQuantity = (sku: string, quantity: number) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.sku === sku ? { ...item, quantity: item.quantity + quantity } : item
      )
    }));
  };

  const decreaseQuantity = (sku: string, quantity: number) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.sku === sku ? { ...item, quantity: item.quantity - quantity } : item
      )
    }));
  };

  const removeFromCart = (sku: string) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.sku !== sku)
    }));
  };

  const updateCartItemVariant = (
    productId: string,
    currentSku: string,
    newVariant: ProductVariant
  ) => {
    // setCart((prev) => ({
    //   ...prev,
    //   items: prev.items.map((item) => {
    //     if (item.productId === productId && item.sku === currentSku) {
    //       // Found the item, update its variant details
    //       return {
    //         ...item,
    //         sku: newVariant.sku,
    //         name: newVariant.name || item.name, // Use variant name if available, otherwise keep original
    //         price: newVariant.price,
    //         specs: newVariant.specs,
    //         thumbnail: newVariant.thumbnail // Update thumbnail as well if variant has one
    //       };
    //     }

    //     return item;
    //   })
    // }));

    setCart((prev) => {
      // Tìm item gốc đang được cập nhật
      const originalItemIndex = prev.items.findIndex(
        (item) => item.productId === productId && item.sku === currentSku
      );

      if (originalItemIndex === -1) {
        return prev; // Không tìm thấy item gốc, không làm gì cả
      }

      const originalItem = prev.items[originalItemIndex];

      // Kiểm tra xem biến thể mới có trùng với một item khác đã có trong giỏ không
      const existingMergedItemIndex = prev.items.findIndex(
        (item, index) =>
          index !== originalItemIndex && // Đảm bảo không so sánh với chính nó
          item.productId === productId && // Cùng productId
          item.sku === newVariant.sku // Cùng SKU mới
      );

      let updatedItems: CartItem[];

      if (existingMergedItemIndex > -1) {
        // Nếu biến thể mới trùng với một item khác, gộp chúng lại
        updatedItems = prev.items
          .map((item, index) => {
            if (index === existingMergedItemIndex) {
              // Tăng số lượng của item đã tồn tại
              return { ...item, quantity: item.quantity + originalItem.quantity };
            }

            return item;
          })
          .filter((_, index) => index !== originalItemIndex); // Xóa item gốc
      } else {
        // Nếu biến thể mới không trùng với item nào khác, chỉ cập nhật item gốc
        updatedItems = prev.items.map((item, index) => {
          if (index === originalItemIndex) {
            return {
              ...item,
              sku: newVariant.sku,
              name: newVariant.name || item.name,
              price: newVariant.price,
              specs: newVariant.specs,
              thumbnail: newVariant.thumbnail
            };
          }

          return item;
        });
      }

      return {
        ...prev,
        items: updatedItems
      };
    });
  };

  const clearCart = () => {
    setCart((prev) => ({
      ...prev,
      items: []
    }));
  };

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
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        updateCartItemVariant,
        clearCart,
        isCartOpen,
        setIsCartOpen
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
