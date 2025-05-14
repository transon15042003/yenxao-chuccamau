import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

import ProductDropdown from '@/components/molecules/MenuDropdown/MenuDropdown';

import NavItem from './NavItem';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const productMenuList = [
  {
    title: 'Bánh Tổ Yến',
    link: '/products?c=banh-to-yen',
    isComing: true
  },
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
  {
    title: 'Yến Chưng Sấn Tiết Trùng',
    link: '/products?c=yen-chung-san-tiet-trung'
  },
  {
    title: 'Món nên thử',
    link: '/products?c=mon-nen-thu'
  }
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [isProductOpen, setIsProductOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="absolute top-[calc(100%+2px)] left-0 w-full bg-primary-gradient-90 text-white z-50">
      <div className="flex flex-col p-4 gap-4">
        <NavItem href="/" onClick={onClose} className="text-lg">
          TRANG CHỦ
        </NavItem>
        <NavItem href="/about" onClick={onClose} className="text-lg">
          GIỚI THIỆU
        </NavItem>
        <div className="relative">
          <button
            type="button"
            className="flex items-center gap-1 focus:outline-none text-lg text-white hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90 group"
            onClick={() => setIsProductOpen(!isProductOpen)}
          >
            SẢN PHẨM
            <ChevronDownIcon
              className={`w-4 h-4 ml-1 stroke-white group-hover:stroke-secondary ${isProductOpen ? 'rotate-180 stroke-secondary' : ''}`}
              strokeWidth={2}
            />
          </button>
          <ProductDropdown
            open={isProductOpen}
            items={productMenuList}
            onItemClick={onClose}
            isMobile={true}
          />
        </div>
        <NavItem href="/blog" onClick={onClose} className="text-lg">
          BLOG
        </NavItem>
        <NavItem href="/contact" onClick={onClose} className="text-lg">
          LIÊN HỆ
        </NavItem>
      </div>
    </div>
  );
};

export default MobileMenu;
