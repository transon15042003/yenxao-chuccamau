import Link from 'next/link';
import React from 'react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}

const NavItem = ({ href, children, active = false, className = '', onClick }: NavItemProps) => (
  <Link
    href={href}
    className={`transition-colors duration-200 font-bold
      ${
        active
          ? 'text-transparent bg-clip-text bg-secondary-gradient-90'
          : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90'
      }
      ${className}
    `}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default NavItem;
