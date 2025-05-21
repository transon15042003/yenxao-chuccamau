import Link from 'next/link';
import React from 'react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

const NavItem = ({ href, children, active = false, className = '' }: NavItemProps) => (
  <Link
    href={href}
    className={`transition-colors duration-200 text-lg font-bold
      ${
        active
          ? 'text-transparent bg-clip-text bg-secondary-gradient-90'
          : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90'
      }
      ${className}
    `}
  >
    {children}
  </Link>
);

export default NavItem;
