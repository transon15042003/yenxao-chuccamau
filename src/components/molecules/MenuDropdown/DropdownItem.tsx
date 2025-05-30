import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils';

interface DropdownItemProps {
  title: string;
  link: string;
  // isComing?: boolean;
  onClick?: () => void;
  isMobile?: boolean;
  slug: string;
}

const DropdownItem = ({ title, link, onClick, isMobile, slug }: DropdownItemProps) => {
  const c = useSearchParams().get('c');

  return (
    <div className={`relative flex flex-col items-start ${isMobile ? 'text-lg' : 'text-base'}`}>
      <div className="relative will-change-contents">
        <Link
          href={link}
          className={cn(
            'hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90 transition-all duration-300',
            slug === c && 'text-transparent bg-clip-text bg-secondary-gradient-90'
          )}
          onClick={onClick}
        >
          {title}
          {/* {isComing && (
            <span className="absolute -top-5 -right-12 bg-secondary text-primary text-xs font-semibold rounded px-2 py-0.5 whitespace-nowrap z-10">
              Sắp ra mắt
            </span>
          )} */}
        </Link>
      </div>
    </div>
  );
};

export default DropdownItem;
