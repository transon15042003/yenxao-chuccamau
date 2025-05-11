import React from 'react';

import { Cart } from '@/components/atoms/Cart';
import Logo from '@/components/atoms/Logo/Logo';
import { Menu } from '@/components/atoms/Menu';
import NavigationMenu from '@/components/molecules/NavigationMenu/NavigationMenu';
const Header = () => {
  return (
    <header className="w-full h-header bg-primary-gradient-90 text-white fixed top-0 z-top">
      <div className="flex h-full items-center justify-between w-full mx-10 xl:mx-auto xl:w-[93%]">
        <Logo className="w-1/3" />
        <NavigationMenu />
        <div className="w-1/3 flex-col justify-evenly items-center">
          <Cart className="w-1/2" count={3} />
          <Menu className="w-1/2 md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
