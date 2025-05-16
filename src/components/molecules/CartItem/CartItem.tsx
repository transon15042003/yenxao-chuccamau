import { CloseSVG } from '@/svg/CloseSVG/CloseSVG';
import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

export type CartItemProps = {
  image: string;
  name: string;
  oldPrice: string;
  price: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

export const CartItem: React.FC<CartItemProps> = ({
  image,
  name,
  oldPrice,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove
}) => {
  return (
    <div className="flex w-full py-4 px-6 bg-white rounded-lg">
      {/* Product Image */}
      <div className="relative w-[115px] h-[99px] flex items-center justify-center ">
        <Image className="rounded-[5px] object-cover" src={image} alt={name} fill />
      </div>
      <div className="flex-1 flex flex-col gap-3 ml-4">
        {/* Product Info */}
        <div className="min-w-0">
          <div className="font-semibold leading-[1.36] text-typo-1 line-clamp-1">{name}</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-semibold text-sm text-primary-dark">{price}</span>
            <span className="text-sm line-through text-[#C1C1C1]">{oldPrice}</span>
          </div>
        </div>
        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onDecrease}
            disabled={quantity === 1}
            className={cn(
              'w-8 h-8 flex items-center justify-center border border-[#B2BCCA] rounded-[3px] text-typo-1',
              quantity === 1 && 'opacity-50'
            )}
            aria-label="Decrease quantity"
          >
            {/* Minus Icon */}
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <rect x="3" y="7.25" width="10" height="1.5" rx="0.75" fill="currentColor" />
            </svg>
          </button>
          <span className="w-8 text-center font-normal text-[16px] text-typo-1">{quantity}</span>
          <button
            onClick={onIncrease}
            className="w-8 h-8 flex items-center justify-center border border-[#B2BCCA] rounded-[3px] text-typo-1"
            aria-label="Increase quantity"
          >
            {/* Plus Icon */}
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <rect x="7.25" y="3" width="1.5" height="10" rx="0.75" fill="currentColor" />
              <rect x="3" y="7.25" width="10" height="1.5" rx="0.75" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
      {/* Remove Button */}
      <div
        className="w-6 flex items-center justify-center bg-[#F3F3F3] md:bg-inherit cursor-pointer"
        role="button"
        onClick={onRemove}
      >
        <button className=" text-typo-1 hover:text-red-500" aria-label="Remove item">
          {/* Trash Icon */}
          <CloseSVG className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
