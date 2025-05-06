import React from 'react';

import Logo from '@/components/atoms/Logo/Logo';
import NavigationMenu from '@/components/molecules/NavigationMenu/NavigationMenu';
const Header = () => {
  return (
    <header className="w-full h-header bg-primary-gradient-90 text-white fixed top-0 z-top">
      <div className="flex h-full items-center justify-between w-full mx-10 xl:mx-auto xl:w-[93%]">
        <Logo />
        <NavigationMenu />
        <div className="w-1/6">cart</div>
      </div>
    </header>
  );
};

export default Header;
