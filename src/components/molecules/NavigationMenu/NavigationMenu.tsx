import Link from 'next/link';
import React from 'react';

import { SearchBar } from '@/components/atoms/SearchBar';

const NavigationMenu = () => {
  return (
    <div className="flex items-center gap-4">
      <Link className="hidden md:inline" href="/">
        Home
      </Link>
      <Link className="hidden md:inline" href="/about">
        About
      </Link>
      <Link className="hidden md:inline" href="/contact">
        Contact
      </Link>
      <Link className="hidden md:inline" href="/#">
        Item (atom)
      </Link>
      <Link className="hidden md:inline" href="/#">
        Item with dropdown (molecule)
      </Link>
      <SearchBar className="" placeholder="Tim kiem" />
    </div>
  );
};

export default NavigationMenu;
