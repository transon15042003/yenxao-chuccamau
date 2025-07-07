'use client';
import { Product } from '@/types/product';
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import OthersProduct from '@/components/organisms/OthersProduct/OthersProduct';

import { listProducts } from '@/lib/data/products';
import { transformProduct } from '@/lib/medusa-adapter/product';

const RecentlyViewedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [viewedProducts] = useLocalStorage<Product['id'][]>('viewedProducts', () => [], {
    initializeWithValue: false
  });

  const fetchProductData = async () => {
    const products = await listProducts({
      countryCode: process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE,
      queryParams: { id: viewedProducts }
    });

    setProducts(products.response.products.map(transformProduct));
  };

  useEffect(() => {
    fetchProductData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewedProducts]);

  if (viewedProducts.length === 0) return null;

  return (
    <div className="mt-8">
      <OthersProduct heading="Sản phẩm đã xem" products={products} />
    </div>
  );
};

export default RecentlyViewedProducts;
