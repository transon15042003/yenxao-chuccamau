'use client';

import { Category } from '@/types/product';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';

import MenuDropdown from '@/components/molecules/MenuDropdown/MenuDropdown';

import NavItem from './NavItem';

const NavigationMenu = ({ categories }: { categories: Category[] }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isProductsPage = pathname.includes('/products');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <div className="w-full flex items-center justify-evenly h-full">
      <NavItem className="text-base lg:text-lg" href="/" active={pathname === '/'}>
        TRANG CHỦ
      </NavItem>
      <NavItem className="text-base lg:text-lg" href="/about" active={pathname === '/about'}>
        GIỚI THIỆU
      </NavItem>
      <div className="relative flex items-center h-full" ref={dropdownRef}>
        <button
          type="button"
          className={`flex items-center gap-1 h-full text-base lg:text-lg font-bold focus:outline-none group ${
            isProductsPage
              ? 'text-transparent bg-clip-text bg-secondary-gradient-90'
              : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90'
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          SẢN PHẨM
          <ChevronDownIcon
            className={`w-4 h-4 ml-1 ${
              isProductsPage ? 'stroke-secondary' : 'stroke-white group-hover:stroke-secondary'
            }`}
            strokeWidth={2}
          />
        </button>
        <MenuDropdown open={open} items={categories} onItemClick={handleItemClick} />
      </div>
      <NavItem className="text-base lg:text-lg" href="/blog" active={pathname === '/blog'}>
        HƯỚNG DẪN
      </NavItem>
      <NavItem className="text-base lg:text-lg" href="/contact" active={pathname === '/contact'}>
        LIÊN HỆ
      </NavItem>
      <NavItem
        className="text-base lg:text-lg"
        href="/account"
        active={pathname.startsWith('/account')}
      >
        TÀI KHOẢN
      </NavItem>
    </div>
  );
};

export default NavigationMenu;
