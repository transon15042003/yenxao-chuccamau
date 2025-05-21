'use client';

import { LargeChevronLeftSVG } from '@/svg/LargeChevronLeftSVG/LargeChevronLeftSVG';
import { LargeChevronRightSVG } from '@/svg/LargeChevronRightSVG/LargeChevronRightSVG';
import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/atoms/Button';
import { SectionHeading } from '@/components/atoms/Heading';
import { ProductCard } from '@/components/molecules/ProductCard';
import { useDetailProduct } from '@/components/providers/DetailProductProvider/DetailProductProvider';

interface OthersProductProps {
  className?: string;
  heading: string;
}

const OthersProduct = ({ className, heading }: OthersProductProps) => {
  const { products } = useDetailProduct();
  const router = useRouter();

  const handleAddToCart = (product: Product) => {
    console.warn(product);
  };

  const handleBuyNow = (product: Product) => {
    console.warn(product);
    router.push(`/payment?productId=${product.id}`);
  };

  const gotoProductDetail = (product: Product) => {
    router.push(`/products/${product.slug}`);
  };

  return (
    <div className={className}>
      <SectionHeading className="text-[#2A2A40] mb-2">{heading}</SectionHeading>
      <div className="relative">
        <Button
          variant="primary"
          fill="fill"
          className="w-[40px] h-[40px] hidden lg:block lg:flex items-center justify-center rounded-full absolute [top:30%] left-0 -translate-x-1/2 z-10"
        >
          <LargeChevronLeftSVG className="text-white h-[24px] w-[24px] stroke-[5px]" />
        </Button>

        <div className="flex flex-row overflow-x-auto lg:overflow-x-hidden gap-4 lg:gap-8">
          {products.map((product) => (
            <ProductCard
              className="min-w-[50%] lg:min-w-0 lg:shrink-0 lg:w-[calc((100%-3*2rem)/4)]"
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
        <Button
          variant="primary"
          fill="fill"
          className="w-[40px] h-[40px] hidden lg:block lg:flex items-center justify-center rounded-full absolute [top:30%] right-0 translate-x-1/2 z-20"
        >
          <LargeChevronRightSVG className="text-white h-[24px] w-[24px] stroke-[5px]" />
        </Button>
      </div>
    </div>
  );
};

export default OthersProduct;
