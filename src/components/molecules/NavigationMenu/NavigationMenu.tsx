'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

import ProductDropdown from '@/components/molecules/ProductDropdown/ProductDropdown';

const NavigationMenu = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className="flex items-center gap-[70px]">
      <Link
        href="/"
        className="hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90"
      >
        TRANG CHỦ
      </Link>
      <Link
        href="/about"
        className="hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90"
      >
        GIỚI THIỆU
      </Link>
      <div className="relative flex items-center" ref={dropdownRef}>
        <button
          type="button"
          className={`flex items-center gap-1 focus:outline-none group ${
            isMounted && open
              ? 'text-transparent bg-clip-text bg-secondary-gradient-90'
              : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90'
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          SẢN PHẨM
          <ChevronDownIcon
            className={`w-4 h-4 ml-1 ${
              isMounted && open ? 'stroke-secondary' : 'stroke-white group-hover:stroke-secondary'
            }`}
            strokeWidth={2}
          />
        </button>
        <div className="absolute left-0 top-[calc(100%+2px)]">
          <ProductDropdown open={open} />
        </div>
      </div>
      <Link
        href="/blog"
        className="hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90"
      >
        BLOG
      </Link>
      <Link
        href="/contact"
        className="hover:text-transparent hover:bg-clip-text hover:bg-secondary-gradient-90"
      >
        LIÊN HỆ
      </Link>
    </div>
  );
};

export default NavigationMenu;
