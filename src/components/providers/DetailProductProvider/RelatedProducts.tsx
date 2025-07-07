import { Product } from '@/types/product';
import React from 'react';

import OthersProduct from '@/components/organisms/OthersProduct/OthersProduct';

const RelatedProducts = ({ products }: { products: Product[] }) => {
  if (products.length === 0) return null;

  return (
    <div className="mt-8">
      <OthersProduct heading="Sản phẩm liên quan" products={products} />
    </div>
  );
};

export default RelatedProducts;
