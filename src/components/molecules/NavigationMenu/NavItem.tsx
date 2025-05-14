import Link from 'next/link';
import React from 'react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavItem = ({ href, children, onClick, className = '' }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={`hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90 ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavItem;
