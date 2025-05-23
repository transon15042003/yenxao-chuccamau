'use client';
import { LargeChevronLeftSVG } from '@/svg/LargeChevronLeftSVG/LargeChevronLeftSVG';
import { LargeChevronRightSVG } from '@/svg/LargeChevronRightSVG/LargeChevronRightSVG';
import { CartItem } from '@/types/cart';
import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { buyNowAndRedirect } from 'src/services/product.service';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css';

import { Button } from '@/components/atoms/Button';
import { SectionHeading } from '@/components/atoms/Heading';
import { ProductCard } from '@/components/molecules/ProductCard';
import { useCart } from '@/components/providers/CartProvider/CartProvider';
import { useDetailProduct } from '@/components/providers/DetailProductProvider/DetailProductProvider';

interface OthersProductProps {
  className?: string;
  heading: string;
}

const OthersProduct = ({ className, heading }: OthersProductProps) => {
  const { products, curSize, curFlavor, curThumbnail, variants } = useDetailProduct();
  const { addToCart } = useCart();
  const router = useRouter();
  const swiperRef = useRef<SwiperType | null>(null);

  const handleAddToCart = (product: Product) => {
    const variant = variants.find(
      (el) => el.specs.size === curSize && el.specs.savour === curFlavor
    );
    const cartItem: CartItem = {
      productId: product.id,
      sku: variant?.sku || '',
      name: variant?.name,
      price: variant?.price || 0,
      quantity: 1,
      specs: { size: curSize, savour: curFlavor },
      thumbnail: curThumbnail
    };

    addToCart(cartItem);
  };

  const handleBuyNow = (product: Product) => {
    buyNowAndRedirect(product, {
      addToCart: addToCart,
      push: router.push
    });
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

  return (
    <div className={className}>
      <SectionHeading className="text-[#2A2A40] mb-2">{heading}</SectionHeading>
      <div className="relative">
        <div className="flex flex-row overflow-x-auto lg:overflow-x-hidden gap-4 lg:gap-8 max-h-[540px]">
          <Button
            variant="primary"
            fill="fill"
            onClick={handlePrev}
            className="swiper-button-prev w-[40px] h-[40px] hidden lg:block lg:flex items-center justify-center rounded-full absolute [top:30%] left-0 -translate-x-1/2 z-10"
          >
            <LargeChevronLeftSVG className="text-white h-[24px] w-[24px] stroke-[5px]" />
          </Button>
          <Swiper
            loop={true}
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
                  // className="min-w-[50%] lg:min-w-0 lg:shrink-0 lg:w-[calc((100%-3*2rem)/4)]"
                  key={product.id}
                  product={product}
                  button={{ label: 'Mua Ngay', onClick: handleBuyNow }}
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
          <Button
            variant="primary"
            fill="fill"
            onClick={handleNext}
            className="swiper-button-next w-[40px] h-[40px] hidden lg:block lg:flex items-center justify-center rounded-full absolute [top:30%] right-0 translate-x-1/2 z-20"
          >
            <LargeChevronRightSVG className="text-white h-[24px] w-[24px] stroke-[5px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OthersProduct;
