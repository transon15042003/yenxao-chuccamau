'use client';

import type { Category } from '@/types/product';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { SectionHeading } from '@/components/atoms/Heading';

import { cn } from '@/lib/utils';

type ProductCategorySidebarProps = {
  className?: string;
  categories: Category[];
};
export const ProductCategorySidebar = ({ className, categories }: ProductCategorySidebarProps) => {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('c');
  const sortOption = searchParams.get('s');

  return (
    <aside className={cn('w-full space-y-4', className)}>
      <SectionHeading className="text-xl font-bold">Danh mục sản phẩm</SectionHeading>
      <ul className="space-y-7">
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link
              href={
                sortOption ? `/products?c=${cat.slug}&s=${sortOption}` : `/products?c=${cat.slug}`
              }
              className={cn(
                'w-full text-left text-lg transition-colors hover:text-primary-light',
                categorySlug === cat.slug ? 'text-primary' : 'text-typo-2'
              )}
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
