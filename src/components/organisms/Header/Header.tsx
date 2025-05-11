import React from 'react';

import { Cart } from '@/components/atoms/Cart';
import Logo from '@/components/atoms/Logo/Logo';
import { Menu } from '@/components/atoms/Menu';
import { SearchBar } from '@/components/atoms/SearchBar';
import NavigationMenu from '@/components/molecules/NavigationMenu/NavigationMenu';
const Header = () => {
  return (
    <header className="flex w-full h-header bg-primary-gradient-90 text-white fixed top-0 z-top">
      <div className="flex h-full items-center justify-between w-full mx-10 xl:mx-auto xl:w-[93%]">
        <Logo className="w-1/3" />
        <NavigationMenu className="hidden md:inline w-1/3" />
        <div className="w-2/3 md:w-1/6 flex justify-end items-center">
          <SearchBar className="grow" placeholder="Tim kiem" />
          <Cart className="flex-none" count={3} />
          <Menu className="flex-none md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
