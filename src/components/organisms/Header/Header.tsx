'use client';

import useClickOutside from '@/hooks/useClickOutside';
import React, { useState, useRef } from 'react';


import Logo from '@/components/atoms/Logo/Logo';
import MobileMenu from '@/components/molecules/NavigationMenu/MobileMenu';
import NavigationMenu from '@/components/molecules/NavigationMenu/NavigationMenu';
import CartButton from '@/components/organisms/CartButton/CartButton';
import SearchBar from '@/components/organisms/SearchBar/SearchBar';
import { useCart } from '@/components/providers/CartProvider/CartProvider';

import CloseMenuIcon from './CloseMenuIcon';
import MenuIcon from './MenuIcon';

const Header = () => {
  const { setIsCartOpen, cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCartClick = () => {
    setIsCartOpen((prev) => !prev);
  };

  useClickOutside({
    ref: menuRef as RefObject<HTMLElement>,
    handler: () => setIsMenuOpen(false),
    isOpen: isMenuOpen,
    additionalRefs: [buttonRef as RefObject<HTMLElement>]
  });

  return (
    <header className="w-full h-[100px] bg-primary-gradient-90 text-white fixed top-0 z-[1000] border-b-[3px] border-secondary">
      <div className="flex h-full items-center justify-between w-full px-4 sm:px-10 xl:mx-auto xl:w-[93%]">
        {/* Logo bên trái */}
        <Logo />
        {/* NavigationMenu ở giữa trên desktop, ẩn trên mobile */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu />
        </div>
        {/* Tìm kiếm, giỏ hàng và hamburger cho mobile */}
        <div className="flex items-center gap-4">
          <SearchBar />

          <CartButton itemCount={cart.items.length} onClick={handleCartClick} />

          {/* Hamburger icon cho mobile */}
          <button
            ref={buttonRef}
            className="md:hidden text-white focus:outline-none transition-transform duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseMenuIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {/* MobileMenu cho mobile */}
      <div ref={menuRef}>
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
