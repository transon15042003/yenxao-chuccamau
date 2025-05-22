'use client';

import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';

import { ProductCard } from '@/components/molecules/ProductCard';
import { useCart } from '@/components/providers/CartProvider/CartProvider';

import { cn } from '@/lib/utils';
import { convertProductToCartItem } from '@/lib/utils/product';

type ProductGridProps = {
  products: Product[];
  className?: string;
};

export const ProductGrid = ({ products, className }: ProductGridProps) => {
  const router = useRouter();
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(convertProductToCartItem(product));
  };

  const handleBuyNow = (product: Product) => {
    console.warn(product);
    router.push(`/payment?productId=${product.id}`);
  };

  const gotoProductDetail = (product: Product) => {
    router.push(`/products/${product.slug}`);
  };

  return (
    <div
      className={cn('grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 lg:gap-8', className)}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          button={{ label: 'Mua Ngay', onClick: handleBuyNow }}
          badge={product.isNew ? 'New' : undefined}
          progress={
            product.total ? { total: product.total, sold: product.totalSold || 0 } : undefined
          }
          onAddToCart={handleAddToCart}
          onViewDetail={gotoProductDetail}
        />
      ))}
    </div>
  );
};
