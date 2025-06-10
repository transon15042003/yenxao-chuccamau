'use client';
import type { Option, PaginationMetadata } from '@/types/common';
import type { Product, ProductSort } from '@/types/product';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import CustomSelect from '@/components/atoms/CustomSelect';
import { EmptyDataBlock } from '@/components/molecules/EmptyDataBlock';
import { Pagination } from '@/components/molecules/Pagination';
import { ProductGrid } from '@/components/organisms/ProductGrid';

type ProductAreaProps = {
  products: Product[];
  metadata: PaginationMetadata;
};

const sortOptions: { label: string; value: ProductSort }[] = [
  // { label: 'Giá tăng dần', value: 'price-asc' },
  // { label: 'Giá giảm dần', value: 'price-desc' },
  { label: 'Tên sản phẩm', value: 'title' },
  { label: 'Mới nhất', value: 'new' }
];

const ProductArea = ({ products, metadata }: ProductAreaProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sortOption, setSortOption] = useState<string>('new');

  const handleChangeSortOption = (newVal: unknown) => {
    const newSortOpt = (newVal as Option).value;
    setSortOption(newSortOpt);

    const params = new URLSearchParams(searchParams);
    switch (newSortOpt) {
      case 'price-asc':
        params.set('s', 'price-asc');
        break;
      case 'price-desc':
        params.set('s', 'price-desc');
        break;
      case 'new':
        params.set('s', 'createAt');
        break;
      case 'title':
        params.set('s', 'title');
        break;
      default:
        params.delete('s');
    }

    router.push(`/products/?${params.toString()}`);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    const current = new URLSearchParams(searchParams);
    current.set('p', (selected + 1).toString());
    router.push(`/products?${current.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (!params.get('s')) {
      params.set('s', 'createAt');
    } else {
      switch (params.get('s')) {
        case 'price-asc':
          setSortOption('price-asc');
          break;
        case 'price-desc':
          setSortOption('price-desc');
          break;
        case 'createAt':
          setSortOption('new');
          break;
        case 'title':
          setSortOption('title');
          break;
      }
    }
    router.push(`/products/?${params.toString()}`);
  }, [router, searchParams]);

  if (products.length === 0) {
    return (
      <div className="flex-1 flex flex-col mt-7 h-[500px]">
        <div className="max-w-[350px] mx-auto">
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
          <CustomSelect
            options={sortOptions}
            placeholder="Sắp xếp theo"
            value={sortOption}
            onChange={handleChangeSortOption}
          />
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
