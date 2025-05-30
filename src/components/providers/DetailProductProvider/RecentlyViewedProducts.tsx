'use client';
import { Product } from '@/types/product';
import React from 'react';
import { useLocalStorage } from 'usehooks-ts';

import OthersProduct from '@/components/organisms/OthersProduct/OthersProduct';

import { useDetailProduct } from './DetailProductProvider';

const RecentlyViewedProducts = () => {
  const { products } = useDetailProduct();
  const [viewedProducts] = useLocalStorage<Product['id'][]>('viewedProducts', () => [], {
    initializeWithValue: false
  });

  if (viewedProducts.length === 0) return null;

  return (
    <div className="mt-8">
      <OthersProduct
        heading="Sản phẩm đã xem"
        products={
          viewedProducts
            .map((id) => products.find((product) => product.id === id))
            .filter(Boolean) as Product[]
        }
      />
    </div>
  );
};

export default RecentlyViewedProducts;
