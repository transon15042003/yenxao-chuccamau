'use client';
import type { Cart, CartItem } from '@/types/cart';
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
  addToCart: (item: CartItem) => void;
  increaseQuantity: (sku: string, quantity: number) => void;
  decreaseQuantity: (sku: string, quantity: number) => void;
  removeFromCart: (sku: string) => void;
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

  const addToCart = (item: CartItem) => {
    const isItemInCart = cart.items.some((cartItem) => cartItem.sku === item.sku);

    if (isItemInCart) {
      setCart((prev) => ({
        ...prev,
        items: prev.items.map((cartItem) =>
          cartItem.sku === item.sku
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      }));
    } else {
      setCart((prev) => ({ ...prev, items: [...prev.items, item] }));
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
