'use client';
import type { PaginationMetadata } from '@/types/common';
import type { Product, ProductSort } from '@/types/product';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

import { EmptyDataBlock } from '@/components/molecules/EmptyDataBlock';
import { Pagination } from '@/components/molecules/Pagination';
import { ProductGrid } from '@/components/organisms/ProductGrid';

import { cn } from '@/lib/utils';
type ProductAreaProps = {
  products: Product[];
  metadata: PaginationMetadata;
};

const sortOptions: { label: string; value: ProductSort }[] = [
  { label: 'Giá tăng dần', value: 'price-asc' },
  { label: 'Giá giảm dần', value: 'price-desc' },
  { label: 'Mới nhất', value: 'new' }
];

const ProductArea = ({ products, metadata }: ProductAreaProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = ({ selected }: { selected: number }) => {
    const current = new URLSearchParams(searchParams);
    current.set('p', (selected + 1).toString());
    router.push(`/products?${current.toString()}`);
  };

  if (products.length === 0) {
    return (
      <div className="flex-1 flex flex-col gap-y-7">
        <div className="max-w-[300px] mx-auto">
          <EmptyDataBlock />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-y-7">
      <div className="w-full flex justify-between lg:items-center lg:flex-row flex-col gap-y-4">
        <div className="order-2 lg:order-1">
          Hiển thị{' '}
          <span className="font-bold">
            {(metadata.page - 1) * metadata.take + 1}-{metadata.page * metadata.take}
          </span>{' '}
          của <span className="font-bold">{metadata.total}</span> sản phẩm
        </div>
        <div className="order-1 lg:order-2 min-w-[230px]">
          <div className="relative w-full">
            <select
              className={cn(
                'w-full appearance-none px-4 py-2.5 bg-white border border-gray-200',
                'rounded-lg text-gray-900 text-base font-medium',
                'focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400',
                'transition cursor-pointer pr-10 shadow-sm'
              )}
              defaultValue=""
            >
              <option value="" disabled>
                Sắp xếp theo
              </option>
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {/* Custom dropdown arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <ProductGrid products={products} />

      {products.length ? (
        <div className="flex self-center">
          <Pagination
            pageCount={metadata.totalPages}
            forcePage={metadata.page - 1}
            onPageChange={handlePageChange}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ProductArea;
