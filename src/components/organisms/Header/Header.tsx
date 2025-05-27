'use client';

import useClickOutside from '@/hooks/useClickOutside';
import CloseMenuIcon from '@/svg/MenuHeaderSVG/CloseMenuIcon';
import MenuIcon from '@/svg/MenuHeaderSVG/MenuIcon';
import React, { useState, useRef, RefObject, Suspense } from 'react';

import Logo from '@/components/atoms/Logo/Logo';
import MobileMenu from '@/components/molecules/NavigationMenu/MobileMenu';
import NavigationMenu from '@/components/molecules/NavigationMenu/NavigationMenu';
import CartButton from '@/components/organisms/CartButton/CartButton';
import SearchBar from '@/components/organisms/SearchBar/SearchBar';
import { useCart } from '@/components/providers/CartProvider/CartProvider';

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
      <div className="flex h-full items-center justify-between w-full px-2 lg:px-10 xl:mx-auto xl:w-[93%]">
        <Logo />
        <div className="hidden md:flex flex-1 justify-center items-center h-full">
          <NavigationMenu />
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
          <Suspense>
            <SearchBar />
          </Suspense>
          <CartButton itemCount={cart.items.length} onClick={handleCartClick} />
        </div>
        <button
          ref={buttonRef}
          type="button"
          className="md:hidden text-white focus:outline-none transition-transform duration-300 group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseMenuIcon /> : <MenuIcon />}
        </button>
      </div>
      <div ref={menuRef}>
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
