'use client';
import React from 'react';

import OthersProduct from '@/components/organisms/OthersProduct/OthersProduct';

import { useDetailProduct } from './DetailProductProvider';

const RelatedProducts = () => {
  const { products, product } = useDetailProduct();

  const relatedProducts = products.filter((p) =>
    p.categories.some((c) => product.categories.includes(c))
  );

  if (relatedProducts.length === 0) return null;

  return (
    <div className="mt-8">
      <OthersProduct heading="Sản phẩm liên quan" products={relatedProducts} />
    </div>
  );
};

export default RelatedProducts;
