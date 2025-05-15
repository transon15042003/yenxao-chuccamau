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
      className={`w-full py-[50px] bg-[url('/newfeed.png')] bg-cover bg-no-repeat flex flex-col items-center justify-center`}
    >
      <SectionTitle heading="Sản phẩm nổi bật" />
      <ChoiceGroup />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8 px-4 w-full max-w-screen-xl mx-auto">
        {initialBestSelling && initialBestSelling.length > 0 ? (
          initialBestSelling.map((product) => (
            <ProductCard
              key={product.id} // Sử dụng product.id làm key (giả định id là duy nhất)
              // *** Truyền props cho ProductCard từ dữ liệu thật của object Product ***
              product={product} // Truyền toàn bộ object Product
              // Tạo prop badge từ discountPercent (nếu có)
              badge={product.discountPercent ? `-${product.discountPercent}%` : undefined}
              // Tạo prop progress từ totalSold và total
              progress={
                product.totalSold !== undefined && product.total !== undefined
                  ? {
                      total: product.total,
                      sold: product.totalSold,
                      label: `Đã bán ${product.totalSold}` // Label hiển thị
                    }
                  : undefined // Nếu không có đủ dữ liệu total/totalSold, không hiển thị progress
              }
              // Tạo prop button
              button={{
                label: 'Mua ngay', // Label nút
                onClick: handleButtonClick // Gắn hàm xử lý khi click nút
              }}
              // Gắn hàm xử lý khi click thêm giỏ hàng icon
              onAddToCart={handleAddToCart}
              // Gắn hàm xử lý khi click ảnh/tên để xem chi tiết
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
