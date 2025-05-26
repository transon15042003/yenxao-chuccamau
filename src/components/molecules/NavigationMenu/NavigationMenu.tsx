'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';

import MenuDropdown from '@/components/molecules/MenuDropdown/MenuDropdown';

import NavItem from './NavItem';

interface ProductMenuItem {
  title: string;
  link: string;
  isComing?: boolean;
}

const productMenuList: ProductMenuItem[] = [
  // {
  //   title: 'Bánh Tổ Yến',
  //   link: '/products?c=banh-to-yen',
  //   isComing: true
  // },
  {
    title: 'Yến Chưng Tươi',
    link: '/products?c=yen-chung-tuoi'
  },
  {
    title: 'Set Quà Yến Chưng Tươi',
    link: '/products?c=yen-chung-tao-do',
    isComing: true
  },
  {
    title: 'Cháo & Súp (Yến)',
    link: '/products?c=chao-sup-yen'
  },
  {
    title: 'Yến Sào Tinh Chế',
    link: '/products?c=yen-sao-tinh-che'
  },
  {
    title: 'Tổ Yến Sào Thô',
    link: '/products?c=to-yen-sao-tho'
  },
  {
    title: 'Topping',
    link: '/products?c=topping'
  }
  // {
  //   title: 'Yến Chưng Sấn Tiết Trùng',
  //   link: '/products?c=yen-chung-san-tiet-trung'
  // },
];

const NavigationMenu = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const isProductsPage = pathname.includes('/products');

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      <NavItem className="text-lg" href="/" active={pathname === '/'}>
        TRANG CHỦ
      </NavItem>
      <NavItem className="text-lg" href="/about" active={pathname === '/about'}>
        GIỚI THIỆU
      </NavItem>
      <div className="relative flex items-center h-full" ref={dropdownRef}>
        <button
          type="button"
          className={`flex items-center gap-1 h-full text-lg font-bold focus:outline-none group ${
            isMounted && (open || isProductsPage)
              ? 'text-transparent bg-clip-text bg-secondary-gradient-90'
              : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90'
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          SẢN PHẨM
          <ChevronDownIcon
            className={`w-4 h-4 ml-1 ${
              isMounted && (open || isProductsPage)
                ? 'stroke-secondary'
                : 'stroke-white group-hover:stroke-secondary'
            }`}
            strokeWidth={2}
          />
        </button>
        <MenuDropdown open={open} items={productMenuList} onItemClick={handleItemClick} />
      </div>
      <NavItem className="text-lg" href="/blog" active={pathname === '/blog'}>
        BLOG
      </NavItem>
      <NavItem className="text-lg" href="/contact" active={pathname === '/contact'}>
        LIÊN HỆ
      </NavItem>
    </div>
  );
};

export default NavigationMenu;
