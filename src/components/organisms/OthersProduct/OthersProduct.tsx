'use client';

import useBuyNowLogic from '@/hooks/useBuyNowLogic';
import { LargeChevronLeftSVG } from '@/svg/LargeChevronLeftSVG/LargeChevronLeftSVG';
import { LargeChevronRightSVG } from '@/svg/LargeChevronRightSVG/LargeChevronRightSVG';
import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';
import { useMemo, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
// eslint-disable-next-line import-helpers/order-imports
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { useWindowSize } from 'usehooks-ts';

import { Button } from '@/components/atoms/Button';
import { SectionHeading } from '@/components/atoms/Heading';
import { ProductCard } from '@/components/molecules/ProductCard';
import { useCart } from '@/components/providers/CartProvider/CartProvider';

import { cn } from '@/lib/utils/cn';
import { convertProductToCartItem } from '@/lib/utils/product';

interface OthersProductProps {
  className?: string;
  heading: string;
  products: Product[];
}

const OthersProduct = ({ className, heading, products }: OthersProductProps) => {
  const { addToCart } = useCart();
  const { handleBuyNow } = useBuyNowLogic();
  const router = useRouter();
  const swiperRef = useRef<SwiperType | null>(null);
  const { width } = useWindowSize({ initializeWithValue: false });

  const handleAddToCart = (product: Product) => {
    addToCart(convertProductToCartItem(product));
  };

  const handleBuyNowClick = (product: Product) => {
    handleBuyNow(product);
  };

  const gotoProductDetail = (product: Product) => {
    router.push(`/products/${product.slug}`);
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const isSwipeAvailable = useMemo(() => {
    if (width && width > 1024) {
      return products.length > 4;
    }

    return products.length > 2;
  }, [width, products]);

  return (
    <div className={className}>
      <SectionHeading className="text-[#2A2A40] mb-2">{heading}</SectionHeading>
      <div className="relative">
        <div className="flex flex-row overflow-x-auto lg:overflow-x-hidden gap-4 lg:gap-8 max-h-[540px]">
          {isSwipeAvailable && (
            <Button
              variant="primary"
              fill="fill"
              onClick={handlePrev}
              className={cn(
                'swiper-button-prev',
                'w-[40px] h-[40px]',
                'hidden lg:flex',
                'items-center justify-center',
                'rounded-full',
                'absolute [top:30%] left-0 -translate-x-1/2',
                'z-10'
              )}
            >
              <LargeChevronLeftSVG className="text-white h-[24px] w-[24px] stroke-[5px]" />
            </Button>
          )}
          <Swiper
            navigation={isSwipeAvailable}
            // loop={true}
            direction="horizontal"
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 8
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10
              }
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="h-full w-full"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  className="max-w-[calc((100% - 8px) / 2)]"
                  key={product.id}
                  product={product}
                  button={{ label: 'Mua Ngay', onClick: handleBuyNowClick }}
                  badge={product.isNew ? 'New' : undefined}
                  progress={
                    product.total
                      ? { total: product.total, sold: product.totalSold || 0 }
                      : undefined
                  }
                  onAddToCart={handleAddToCart}
                  onViewDetail={gotoProductDetail}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {isSwipeAvailable && (
            <Button
              variant="primary"
              fill="fill"
              onClick={handleNext}
              className={cn(
                'swiper-button-next',
                'w-[40px] h-[40px]',
                'hidden lg:flex',
                'items-center justify-center',
                'rounded-full',
                'absolute [top:30%] right-0 translate-x-1/2 z-20',
                !isSwipeAvailable && 'hidden'
              )}
            >
              <LargeChevronRightSVG className="text-white h-[24px] w-[24px] stroke-[5px]" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OthersProduct;
