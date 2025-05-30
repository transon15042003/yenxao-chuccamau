import productMenuList from '@/data/product-categories.json';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import MenuDropdown from '@/components/molecules/MenuDropdown/MenuDropdown';

import NavItem from './NavItem';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname();
  const [isProductOpen, setIsProductOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="absolute top-[calc(100%+2px)] left-0 w-full h-screen bg-primary-gradient-90 text-white z-50">
      <div className="flex flex-col p-4 pt-6 gap-6">
        <NavItem href="/" className="text-2xl" onClick={onClose} active={pathname === '/'}>
          TRANG CHỦ
        </NavItem>
        <NavItem
          href="/about"
          className="text-2xl"
          onClick={onClose}
          active={pathname === '/about'}
        >
          GIỚI THIỆU
        </NavItem>
        <div className="relative">
          <button
            type="button"
            className={`flex items-center justify-between w-full focus:outline-none text-2xl font-bold  
              ${
                pathname.startsWith('/products')
                  ? 'text-transparent bg-clip-text bg-secondary-gradient-90'
                  : 'text-white'
              } group`}
            onClick={() => setIsProductOpen(!isProductOpen)}
          >
            SẢN PHẨM
            <ChevronRightIcon
              className={`w-6 h-6 ml-auto transition-transform duration-20 ${isProductOpen && 'rotate-90'} ${pathname.startsWith('/products') ? 'stroke-secondary' : ' stroke-white'}`}
              strokeWidth={2}
            />
          </button>
          <MenuDropdown
            open={isProductOpen}
            items={productMenuList}
            isMobile={true}
            onItemClick={onClose}
          />
        </div>
        <NavItem href="/blog" className="text-2xl" onClick={onClose} active={pathname === '/blog'}>
          BLOG
        </NavItem>
        <NavItem
          href="/contact"
          className="text-2xl"
          onClick={onClose}
          active={pathname === '/contact'}
        >
          LIÊN HỆ
        </NavItem>
      </div>
    </div>
  );
};

export default MobileMenu;
