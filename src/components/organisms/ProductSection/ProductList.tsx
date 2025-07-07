'use client';
import useBuyNowLogic from '@/hooks/useBuyNowLogic';
import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';
import React from 'react';

import { ProductCard } from '@/components/molecules/ProductCard';
import { useCart } from '@/components/providers/CartProvider/CartProvider';

import { convertProductToCartItem } from '@/lib/utils/product';

const ProductList = ({ products }: { products: Product[] }) => {
  const { addToCart } = useCart();
  const { handleBuyNow } = useBuyNowLogic();
  const router = useRouter();

  const handleAddToCart = (product: Product) => {
    addToCart(convertProductToCartItem(product));
  };

  const handleViewDetail = (product: Product) => {
    router.push(`/products/${product.slug}`);
  };

  const handleButtonClick = (product: Product) => {
    handleBuyNow(product);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-3 lg:gap-6 my-8 px-4 w-full max-w-screen-xl mx-auto">
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            badge={product.discountPercent ? `-${product.discountPercent}%` : undefined}
            progress={
              product.totalSold !== undefined && product.total !== undefined
                ? {
                    total: product.total,
                    sold: product.totalSold,
                    label: `Đã bán ${product.totalSold}`
                  }
                : undefined
            }
            button={{
              label: 'Mua ngay',
              onClick: handleButtonClick
            }}
            onAddToCart={handleAddToCart}
            onViewDetail={handleViewDetail}
          />
        ))
      ) : (
        <p>Không có sản phẩm nổi bật nào.</p>
      )}
    </div>
  );
};

export default ProductList;
