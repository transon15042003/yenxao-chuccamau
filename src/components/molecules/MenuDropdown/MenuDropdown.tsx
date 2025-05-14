import React from 'react';

import DropdownItem from './DropdownItem';

interface MenuItem {
  title: string;
  link: string;
  isComing?: boolean;
}

interface MenuDropdownProps {
  open: boolean;
  items: MenuItem[];
  onItemClick?: () => void;
  isMobile?: boolean;
}

const MenuDropdown = ({ open, items, onItemClick, isMobile = false }: MenuDropdownProps) => {
  if (!open) return null;

  if (isMobile) {
    return (
      <div className="text-white px-4 py-2">
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <DropdownItem
              key={item.title}
              title={item.title}
              link={item.link}
              isComing={item.isComing}
              onClick={onItemClick}
              isMobile={true}
            />
          ))}
        </div>
      </div>
    );
  }

  // Chia items thành 2 hàng
  const itemsPerRow = Math.ceil(items.length / 2);
  const firstRow = items.slice(0, itemsPerRow);
  const secondRow = items.slice(itemsPerRow);

  return (
    <div className="absolute left-0 top-full mt-2 bg-primary-gradient-90 text-white rounded shadow-lg px-8 py-6 min-w-[600px] z-50">
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap gap-8">
          {firstRow.map((item) => (
            <div key={item.title} className="w-[calc(50%-16px)]">
              <DropdownItem
                title={item.title}
                link={item.link}
                isComing={item.isComing}
                onClick={onItemClick}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-8">
          {secondRow.map((item) => (
            <div key={item.title} className="w-[calc(50%-16px)]">
              <DropdownItem
                title={item.title}
                link={item.link}
                isComing={item.isComing}
                onClick={onItemClick}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;
