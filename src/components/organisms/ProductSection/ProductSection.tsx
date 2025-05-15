'use client';
import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';

import { ChoiceGroup } from '@/components/molecules/ChoiceGroup';
import { ProductCard } from '@/components/molecules/ProductCard';
import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';
import { useCart } from '@/components/providers/CartProvider/CartProvider';

import { convertProductToCartItem } from '@/lib/utils/product';

export const ProductSection = ({ initialBestSelling }: { initialBestSelling: Product[] }) => {
  const router = useRouter();
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(convertProductToCartItem(product));
  };

  const handleViewDetail = (product: Product) => {
    router.push(`/products?c=${product.slug}`);
  };

  const handleButtonClick = (product: Product) => {
    router.push(`/payment/${product.slug}`);
  };

  return (
    <div
      className={`w-full py-[50px] bg-[url('/images/backgrounds/newfeed.png')] bg-cover bg-no-repeat flex flex-col items-center justify-center`}
    >
      <SectionTitle heading="Sản phẩm nổi bật" />
      <ChoiceGroup />

      {/* This div creates a responsive grid layout for products. Using Tailwind columns (1 col on small, 2 on medium, 4 on large). Loop and map data from initialBestSelling - forwarded by props */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8 px-4 w-full max-w-screen-xl mx-auto">
        {initialBestSelling && initialBestSelling.length > 0 ? (
          initialBestSelling.map((product) => (
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

      <button
        type="button"
        className="border-2 border-black px-4 py-2 rounded-lg text-[#2A2A40] font-semibold text-lg hover:bg-black hover:text-white"
        onClick={() => router.push('/products')}
      >
        Xem tất cả sản phẩm
      </button>
    </div>
  );
};
