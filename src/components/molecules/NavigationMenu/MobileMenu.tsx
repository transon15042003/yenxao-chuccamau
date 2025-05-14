import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState } from 'react';

import ProductDropdown from '@/components/molecules/ProductDropdown/ProductDropdown';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [isProductOpen, setIsProductOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-primary text-white z-50">
      <div className="flex flex-col p-4 gap-4">
        <Link
          href="/"
          className="text-lg hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90"
          onClick={onClose}
        >
          TRANG CHỦ
        </Link>
        <Link
          href="/about"
          className="text-lg hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90"
          onClick={onClose}
        >
          GIỚI THIỆU
        </Link>
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
          <ProductDropdown open={isProductOpen} isMobile={true} onLinkClick={onClose} />
        </div>
        <Link
          href="/blog"
          className="text-lg hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90"
          onClick={onClose}
        >
          BLOG
        </Link>
        <Link
          href="/contact"
          className="text-lg hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90"
          onClick={onClose}
        >
          LIÊN HỆ
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
