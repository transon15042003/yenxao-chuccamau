import categoriesData from '@/data/categories.json';
import Link from 'next/link';
import React from 'react';

interface Product {
  name: string;
  link: string;
  comingSoon?: boolean;
}

interface ProductDropdownProps {
  open: boolean;
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const ProductDropdown = ({ open, isMobile = false, onLinkClick }: ProductDropdownProps) => {
  if (!open) return null;

  const products = categoriesData.categories as Product[];

  return (
    <div
      className={`${
        isMobile
          ? 'mt-2 pl-4 flex flex-col gap-2'
          : 'absolute left-0 top-full mt-2 bg-primary-gradient-90 text-white rounded shadow-lg px-8 py-6 min-w-[600px] z-50 grid grid-cols-2 gap-8'
      }`}
    >
      <div className="flex flex-col gap-4">
        {products.slice(0, Math.ceil(products.length / 2)).map((item) => (
          <div key={item.name} className="relative flex flex-col items-start text-lg">
            <div className="relative will-change-contents">
              <Link
                href={item.link}
                onClick={onLinkClick}
                className="hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90 transition-all duration-300"
              >
                {item.name}
                {item.comingSoon && (
                  <span className="absolute -top-5 -right-12 bg-secondary text-primary text-xs font-semibold rounded px-2 py-0.5 whitespace-nowrap z-10">
                    Sắp ra mắt
                  </span>
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {products.slice(Math.ceil(products.length / 2)).map((item) => (
          <div key={item.name} className="relative flex flex-col items-start text-lg">
            <div className="relative will-change-contents">
              <Link
                href={item.link}
                onClick={onLinkClick}
                className="hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90 transition-all duration-300"
              >
                {item.name}
                {item.comingSoon && (
                  <span className="absolute -top-5 -right-12 bg-secondary text-primary text-xs font-semibold rounded px-2 py-0.5 whitespace-nowrap z-10">
                    Sắp ra mắt
                  </span>
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDropdown;
