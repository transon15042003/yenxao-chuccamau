'use client';
import { Product } from '@/types/product';

import { StyledHeading } from '@/components/atoms/StyledHeading';
import { ChoiceGroup } from '@/components/molecules/ChoiceGroup';
import { ProductCard } from '@/components/molecules/ProductCard';

export const ProductSection = () => {
  // *** Bắt đầu Định nghĩa dữ liệu mẫu trực tiếp tại đây ***
  interface ProductCardProps {
    className?: string;
    product: Product;
    badge?: string;
    progress?: {
      total: number;
      sold: number;
      label?: string;
    };
    button: {
      label: string;
      onClick?: (product: Product) => void;
      disabled?: boolean;
    };
    onAddToCart?: (product: Product) => void;
    onViewDetail?: (product: Product) => void;
  }
  // Hàm helper để tạo nhanh một object Product mẫu (cần kiểu Product từ product.ts)
  const createMockProduct = (
    id: string,
    name: string,
    price: number,
    thumbnail: string,
    isNew: boolean = false,
    discountPercent?: number,
    totalSold?: number,
    total?: number // Tổng số lượng cho progress bar
  ): Product => ({
    id,
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    price,
    thumbnail,
    images: [thumbnail, thumbnail.replace('.jpg', '-detail-1.jpg')],
    description: `Mô tả chi tiết cho sản phẩm ${name}...`,
    categories: ['cat-' + Math.floor(Math.random() * 5)],
    ingredients: ['Thành phần mẫu 1', 'Thành phần mẫu 2'],
    specs: [],
    variants: [
      { sku: `${id}-sku-std`, specs: { size: 'standard' }, price, stock: 50, isActive: true }
    ],
    isNew,
    discountPercent,
    discountAmount: discountPercent ? price * (discountPercent / 100) : undefined,
    total,
    totalSold,
    createdAt: new Date().toISOString()
  });

  // Mảng chứa dữ liệu đầy đủ cho từng ProductCard (cần kiểu ProductCardProps từ ProductCard.tsx)
  const mockProductCardData: ProductCardProps[] = [
    {
      product: createMockProduct(
        'prod-ru-long-1a',
        'Chân Yến Rút Lông - Loại 1',
        12000000, // Giá gốc mẫu
        '/images/products/yen-chung-tuoi/yen-vun-duong-phen.jpg', // Ảnh thumbnail mẫu (thay bằng đường dẫn ảnh thật)
        false, // Không phải mới
        20, // Giảm giá 20%
        150, // Đã bán 150
        200 // Tổng số cho progress bar
      ),
      badge: '-20%', // Hiển thị badge "-20%"
      progress: { total: 200, sold: 150, label: 'Đã bán 150' }, // Thông tin progress bar
      button: { label: 'Mua ngay' }, // Thông tin nút
      onAddToCart: (product) => console.warn('Đã thêm vào giỏ hàng:', product.name), // Hàm xử lý khi click thêm giỏ hàng
      onViewDetail: (product) => console.warn('Xem chi tiết:', product.slug) // Hàm xử lý khi click xem chi tiết
    },
    {
      product: createMockProduct(
        'prod-ru-long-1b',
        'Chân Yến Rút Lông - Loại 1',
        12000000,
        '/images/products/yen-chung-tuoi/yen-vun-duong-phen.jpg', // Replace with actual mock paths
        false,
        20,
        150,
        200
      ),
      badge: '-20%',
      progress: { total: 200, sold: 150, label: 'Đã bán 150' },
      button: { label: 'Mua ngay' },
      onAddToCart: (product) => console.warn('Đã thêm vào giỏ hàng:', product.name),
      onViewDetail: (product) => console.warn('Xem chi tiết:', product.slug)
    },
    {
      product: createMockProduct(
        'prod-ru-long-1c',
        'Chân Yến Rút Lông - Loại 1',
        12000000,
        '/images/products/yen-chung-tuoi/yen-vun-duong-phen.jpg', // Replace with actual mock paths
        false,
        20,
        150,
        200
      ),
      badge: '-20%',
      progress: { total: 200, sold: 150, label: 'Đã bán 150' },
      button: { label: 'Mua ngay' },
      onAddToCart: (product) => console.warn('Đã thêm vào giỏ hàng:', product.name),
      onViewDetail: (product) => console.warn('Xem chi tiết:', product.slug)
    },
    {
      product: createMockProduct(
        'prod-ru-long-1d',
        'Chân Yến Rút Lông - Loại 1',
        12000000,
        '/images/products/yen-chung-tuoi/yen-vun-duong-phen.jpg', // Replace with actual mock paths
        false,
        20,
        150,
        200
      ),
      badge: '-20%',
      progress: { total: 200, sold: 150, label: 'Đã bán 150' },
      button: { label: 'Mua ngay' },
      onAddToCart: (product) => console.warn('Đã thêm vào giỏ hàng:', product.name),
      onViewDetail: (product) => console.warn('Xem chi tiết:', product.slug)
    },
    {
      product: createMockProduct(
        'prod-ru-long-1e',
        'Chân Yến Rút Lông - Loại 1',
        12000000,
        '/images/products/yen-chung-tuoi/yen-vun-duong-phen.jpg', // Replace with actual mock paths
        false,
        20,
        150,
        200
      ),
      badge: '-20%',
      progress: { total: 200, sold: 150, label: 'Đã bán 150' },
      button: { label: 'Mua ngay' },
      onAddToCart: (product) => console.warn('Đã thêm vào giỏ hàng:', product.name),
      onViewDetail: (product) => console.warn('Xem chi tiết:', product.slug)
    },
    {
      product: createMockProduct(
        'prod-ru-long-1f',
        'Chân Yến Rút Lông - Loại 1',
        12000000,
        '/images/products/yen-chung-tuoi/yen-vun-duong-phen.jpg', // Replace with actual mock paths
        false,
        20,
        150,
        200
      ),
      badge: '-20%',
      progress: { total: 200, sold: 150, label: 'Đã bán 150' },
      button: { label: 'Mua ngay' },
      onAddToCart: (product) => console.warn('Đã thêm vào giỏ hàng:', product.name),
      onViewDetail: (product) => console.warn('Xem chi tiết:', product.slug)
    },
    {
      product: createMockProduct(
        'prod-ru-long-1g',
        'Chân Yến Rút Lông - Loại 1',
        12000000,
        '/images/products/yen-chung-tuoi/yen-vun-duong-phen.jpg', // Replace with actual mock paths
        false,
        20,
        150,
        200
      ),
      badge: '-20%',
      progress: { total: 200, sold: 150, label: 'Đã bán 150' },
      button: { label: 'Mua ngay' },
      onAddToCart: (product) => console.warn('Đã thêm vào giỏ hàng:', product.name),
      onViewDetail: (product) => console.warn('Xem chi tiết:', product.slug)
    },
    {
      product: createMockProduct(
        'prod-ru-long-1h',
        'Chân Yến Rút Lông - Loại 1',
        12000000,
        '/mock-images/ru-long-1h-thumb.jpg', // Replace with actual mock paths
        false,
        20,
        150,
        200
      ),
      badge: '-20%',
      progress: { total: 200, sold: 150, label: 'Đã bán 150' },
      button: { label: 'Mua ngay' },
      onAddToCart: (product) => console.warn('Đã thêm vào giỏ hàng:', product.name),
      onViewDetail: (product) => console.warn('Xem chi tiết:', product.slug)
    }
    // ... Thêm các object dữ liệu mẫu khác tại đây
  ];

  // *** Kết thúc Định nghĩa dữ liệu mẫu ***

  return (
    <div
      className={`w-full py-[50px] bg-[url('/newfeed.png')] bg-cover bg-no-repeat flex flex-col items-center justify-center`}
    >
      <StyledHeading title="Sản phẩm nổi bật" />
      <ChoiceGroup />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8 px-4">
        {/* Lặp qua mảng dữ liệu mẫu và render ProductCard cho mỗi object */}
        {mockProductCardData.map((cardData, index) => (
          <ProductCard
            key={cardData.product.id || index} // Sử dụng key duy nhất
            {...cardData} // Truyền tất cả các thuộc tính từ cardData làm props
          />
        ))}
      </div>

      <button
        type="button"
        className="border-2 border-black px-4 py-2 rounded-lg text-[#2A2A40] font-semibold text-lg hover:bg-black hover:text-white"
      >
        Xem tất cả sản phẩm
      </button>
    </div>
  );
};
