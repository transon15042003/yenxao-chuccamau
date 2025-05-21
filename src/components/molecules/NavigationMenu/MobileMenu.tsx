import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

import ProductDropdown from '@/components/molecules/MenuDropdown/MenuDropdown';

import NavItem from './NavItem';

interface MobileMenuProps {
  isOpen: boolean;
}

const productMenuList = [
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

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const [isProductOpen, setIsProductOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="absolute top-[calc(100%+2px)] left-0 w-full h-screen bg-primary-gradient-90 text-white z-50">
      <div className="flex flex-col p-6 pt-10 gap-10">
        <NavItem href="/" className="text-2xl">
          TRANG CHỦ
        </NavItem>
        <NavItem href="/about" className="text-2xl">
          GIỚI THIỆU
        </NavItem>
        <div className="relative">
          <button
            type="button"
            className={`flex items-center justify-between w-full focus:outline-none text-2xl font-bold ${
              isProductOpen
                ? 'text-transparent bg-clip-text bg-secondary-gradient-90'
                : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90'
            } group`}
            onClick={() => setIsProductOpen(!isProductOpen)}
          >
            SẢN PHẨM
            <ChevronRightIcon
              className={`w-6 h-6 ml-auto transition-transform duration-200 ${isProductOpen ? 'rotate-90 stroke-secondary' : 'stroke-white group-hover:stroke-secondary'}`}
              strokeWidth={2}
            />
          </button>
          <ProductDropdown open={isProductOpen} items={productMenuList} isMobile={true} />
        </div>
        <NavItem href="/blog" className="text-2xl">
          BLOG
        </NavItem>
        <NavItem href="/contact" className="text-2xl">
          LIÊN HỆ
        </NavItem>
      </div>
    </div>
  );
};

export default MobileMenu;
