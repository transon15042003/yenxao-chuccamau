import { Category } from '@/types/product';
import React from 'react';

import DropdownItem from './DropdownItem';

interface MenuDropdownProps {
  open: boolean;
  items: Category[];
  onItemClick?: () => void;
  isMobile?: boolean;
}

const MenuDropdown = ({ open, items, onItemClick, isMobile = false }: MenuDropdownProps) => {
  if (!open) return null;

  if (isMobile) {
    return (
      <div className="text-white py-4 pb-0 -ml-[3px]">
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <DropdownItem
              key={item.id}
              title={item.name}
              slug={item.slug}
              link={`/products?c=${item.slug}`}
              // isComing={item.isComing}
              onClick={onItemClick}
              isMobile={true}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-[calc(100%+2px)] left-1/2 transform -translate-x-1/2 bg-primary-gradient-90 text-white rounded shadow-lg px-8 py-6 min-w-[510px] z-50">
      <div className="grid grid-cols-2 gap-8">
        {items.map((item) => (
          <div key={item.id}>
            <DropdownItem
              title={item.name}
              link={`/products?c=${item.slug}`}
              slug={item.slug}
              // isComing={item.isComing}
              onClick={onItemClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDropdown;
