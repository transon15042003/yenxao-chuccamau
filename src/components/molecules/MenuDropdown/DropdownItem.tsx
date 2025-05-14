import Link from 'next/link';
import React from 'react';

interface DropdownItemProps {
  title: string;
  link: string;
  isComing?: boolean;
  onClick?: () => void;
  isMobile?: boolean;
}

const DropdownItem = ({ title, link, isComing, onClick, isMobile }: DropdownItemProps) => {
  return (
    <div className={`relative flex flex-col items-start ${isMobile ? 'text-lg' : 'text-base'}`}>
      <div className="relative will-change-contents">
        <Link
          href={link}
          className="hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90 transition-all duration-300"
          onClick={onClick}
        >
          {title}
          {isComing && (
            <span className="absolute -top-5 -right-12 bg-secondary text-primary text-xs font-semibold rounded px-2 py-0.5 whitespace-nowrap z-10">
              Sắp ra mắt
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default DropdownItem;
