'use client';

import { ProductVariant } from '@/types/product';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css';

import { Button } from '@/components/atoms/Button';
import { useDetailProduct } from '@/components/providers/DetailProductProvider/DetailProductProvider';

import { cn } from '@/lib/utils';

interface ImgSliderProps {
  className?: string;
}

const ImgSlider = ({ className }: ImgSliderProps) => {
  const { variants, selectedVariant, setSelectedVariant, sliderRef, handleNext, handlePrevious } =
    useDetailProduct();
  const [curIdx, setCurIdx] = useState<number>(
    variants.findIndex((el) => el.sku === selectedVariant?.sku) ?? 0
  );
  const handleClick = (variant: ProductVariant): void => {
    setSelectedVariant(variant);
  };

  useEffect(() => {
    const idx = variants.findIndex((el) => el.sku === selectedVariant?.sku) ?? 0;
    setCurIdx(idx);
    if (sliderRef.current) {
      sliderRef.current.slideToLoop(idx);
    }
  }, [selectedVariant, sliderRef, variants]);

  return (
    <div
      className={cn(
        'relative max-h-[132px] max-w-[100%] lg:min-w-[100px] lg:max-h-[640px] pt-4 px-3 lg:px-0 lg:pt-0 bg-white',
        variants.length === 1 && 'lg:h-[120px]',
        variants.length === 2 && 'lg:h-[250px]',
        variants.length === 3 && 'lg:h-[380px]',
        variants.length === 4 && 'lg:h-[510px]',
        className
      )}
      style={
        variants.length === 1
          ? {
              width: 'calc((100% - 24px) / 4)'
            }
          : variants.length === 2
            ? {
                width: 'calc((100% - 24px) / 2)'
              }
            : variants.length === 3
              ? {
                  width: 'calc(((100% - 24px) / 4) * 3)'
                }
              : undefined
      }
      onMouseLeave={() => {
        if (sliderRef.current) {
          sliderRef.current.slideToLoop(curIdx);
        }
      }}
    >
      <Button
        variant="primary"
        fill="fill"
        onClick={handlePrevious}
        className={cn(
          'swiper-button-prev absolute top-1/2 -translate-y-1/2 left-4 rounded-full p-0 w-[24px] h-[24px] opacity-80 lg:hidden cursor-pointer z-10',
          { '!hidden': variants.length < 5 }
        )}
      >
        &lt;
      </Button>
      <Button
        variant="primary"
        fill="fill"
        onClick={handlePrevious}
        className={cn(
          'swiper-button-prev absolute hidden rounded-full w-[24px] h-[24px] p-0 opacity-80 lg:top-2 lg:left-1/2 lg:-translate-x-1/2 lg:block cursor-pointer z-10',
          { '!hidden': variants.length < 6 }
        )}
      >
        ^
      </Button>
      <Swiper
        loop={true}
        mousewheel={true}
        modules={[Mousewheel]}
        breakpoints={{
          0: {
            direction: 'horizontal',
            slidesPerView: variants.length < 4 ? variants.length : 4,
            spaceBetween: 8
          },
          1024: {
            direction: 'vertical',
            slidesPerView: variants.length < 5 ? variants.length : 5,
            spaceBetween: 10
          }
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          sliderRef.current = swiper;
        }}
        className="lg:h-full lg:w-full"
      >
        {variants.map((el, idx) => (
          <SwiperSlide
            key={idx}
            className={cn('lg:!min-h-[120px] lg:!w-full h-full w-full cursor-pointer')}
          >
            <Image
              src={el.thumbnail}
              alt="product"
              onClick={() => handleClick(el)}
              className={cn(
                'h-[100px] lg:h-[120px] lg:w-[100px] object-cover hover:border-2 hover:border-primary',
                el.id === selectedVariant?.id && 'border-2 border-primary'
              )}
              width={120}
              height={120}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        variant="primary"
        fill="fill"
        onClick={handleNext}
        className={cn(
          'swiper-button-next absolute bottom-1/2 translate-y-1/2 right-4 rounded-full p-0 w-[24px] h-[24px] opacity-80 lg:hidden cursor-pointer z-10',
          { '!hidden': variants.length < 5 }
        )}
      >
        &gt;
      </Button>
      <Button
        variant="primary"
        fill="fill"
        onClick={handleNext}
        className={cn(
          'swiper-button-next absolute hidden rounded-full w-[24px] h-[24px] p-0 opacity-80 lg:right-1/2 lg:bottom-2 lg:translate-x-1/2 lg:block cursor-pointer z-10',
          { '!hidden': variants.length < 6 }
        )}
      >
        v
      </Button>
    </div>
  );
};

export default ImgSlider;
