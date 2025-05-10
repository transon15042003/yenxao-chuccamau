import React from 'react';

import { Cart } from '@/components/atoms/Cart';
import Logo from '@/components/atoms/Logo/Logo';
import NavigationMenu from '@/components/molecules/NavigationMenu/NavigationMenu';
const Header = () => {
  return (
    <header className="w-full h-header bg-primary-gradient-90 text-white fixed top-0 z-top">
      <div className="flex h-full items-center justify-between w-full mx-10 xl:mx-auto xl:w-[93%]">
        <Logo />
        <NavigationMenu />
        <Cart className="" />
      </div>
    </header>
  );
};

export default Header;
