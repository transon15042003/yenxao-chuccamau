import React from 'react';

const CartButton = () => (
  <div className="relative">
    <svg
      className="w-6 h-6 md:w-7 md:h-7 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
    <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-600 text-xs font-bold rounded-full px-1.5 py-0.5">
      0
    </span>
  </div>
);

export default CartButton;
