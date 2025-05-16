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
    title: 'Yến Sào Tinh Chế',
    link: '/products?c=yen-sao-tinh-che'
  },
  {
    title: 'Yến Chưng Tươi',
    link: '/products?c=yen-chung-tuoi'
  },
  {
    title: 'Tổ Yến Sào Thô',
    link: '/products?c=to-yen-sao-tho'
  },
  {
    title: 'Set Quà Yến Chưng Tươi',
    link: '/products?c=yen-chung-tao-do',
    isComing: true
  },
  {
    title: 'Topping',
    link: '/products?c=topping'
  },
  // {
  //   title: 'Yến Chưng Sấn Tiết Trùng',
  //   link: '/products?c=yen-chung-san-tiet-trung'
  // },
  {
    title: 'Món nên thử',
    link: '/products?c=mon-nen-thu'
  }
];

const NavigationMenu = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

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
    <div className="flex items-center gap-[60px] h-full">
      <NavItem href="/" active={pathname === '/'}>
        TRANG CHỦ
      </NavItem>
      <NavItem href="/about" active={pathname === '/about'}>
        GIỚI THIỆU
      </NavItem>
      <div className="relative flex items-center h-full" ref={dropdownRef}>
        <button
          type="button"
          className={`flex items-center gap-1 h-full focus:outline-none group ${
            isMounted && open
              ? 'text-transparent bg-clip-text bg-secondary-gradient-90'
              : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90'
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          SẢN PHẨM
          <ChevronDownIcon
            className={`w-4 h-4 ml-1 ${
              isMounted && open ? 'stroke-secondary' : 'stroke-white group-hover:stroke-secondary'
            }`}
            strokeWidth={2}
          />
        </button>
        <MenuDropdown open={open} items={productMenuList} onItemClick={handleItemClick} />
      </div>
      <NavItem href="/blog" active={pathname === '/blog'}>
        BLOG
      </NavItem>
      <NavItem href="/contact" active={pathname === '/contact'}>
        LIÊN HỆ
      </NavItem>
    </div>
  );
};

export default NavigationMenu;
