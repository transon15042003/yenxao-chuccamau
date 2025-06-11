import { CartSVG } from '@/svg/CartSVG/CartSVG';
import React from 'react';

interface CartButtonProps {
  itemCount: number;
  onClick?: () => void;
}

const CartButton = ({ itemCount, onClick }: CartButtonProps) => (
  <div className="relative" onClick={onClick} role="button">
    <CartSVG className="w-6 h-6 md:w-7 md:h-7 text-white" />
    {itemCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-secondary text-primary text-xs font-bold rounded-full px-1.5 py-0.5">
        {itemCount}
      </span>
    )}
  </div>
);

export default CartButton;
