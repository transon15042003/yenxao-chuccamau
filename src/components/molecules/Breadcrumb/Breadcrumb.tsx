import { ChevronRightSVG } from '@/svg/ChevronRightSVG/ChevronRightSVG';
import Link from 'next/link';
import React from 'react';

type BreadcrumbProps = {
  items: {
    label: string;
    href: string;
  }[];
};

export const Breadcrumb = ({ items }: BreadcrumbProps) => (
  <nav className=" bg-ground-1 py-3">
    <ul className="flex items-center gap-1 max-w-[83%] mx-auto text-sm text-[#3E4B5E]">
      <li>
        <Link href="/" className="text-gray-500 hover:text-red-700">
          Trang chủ
        </Link>
      </li>
      {items.length > 0 &&
        items.map((item) => (
          <React.Fragment key={item.href}>
            <ChevronRightSVG />
            <Link href={item.href} className="text-gray-500 hover:text-red-700">
              {item.label}
            </Link>
          </React.Fragment>
        ))}
    </ul>
  </nav>
);
