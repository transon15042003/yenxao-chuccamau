/* eslint-disable import-helpers/order-imports */
'use client';

import Image from 'next/image';
import { useEffect, useMemo } from 'react';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css';

import type { SwiperOptions } from 'swiper/types';

import { Button } from '@/components/atoms/Button';
import { useDetailProduct } from '@/components/providers/DetailProductProvider/DetailProductProvider';

import { cn } from '@/lib/utils';

interface ImgSliderProps {
  className?: string;
}

const ImgSlider = ({ className }: ImgSliderProps) => {
  const { variants, selectedVariant, setSelectedVariant, sliderRef } = useDetailProduct();

  const curIdx = variants.findIndex((el) => el.sku === selectedVariant?.sku);

  const breakpointsConfig: {
    [width: number]: SwiperOptions;
  } = useMemo(
    () => ({
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
    }),
    [variants]
  );

  const handleInitSwiper = (swiper: SwiperClass) => {
    sliderRef.current = swiper;
  };

  const goBackVariant = () => {
    if (curIdx > 0) {
      setSelectedVariant(variants[curIdx - 1]);
    } else {
      setSelectedVariant(variants[variants.length - 1]);
    }
  };

  const goNextVariant = () => {
    if (curIdx < variants.length - 1) {
      setSelectedVariant(variants[curIdx + 1]);
    } else {
      setSelectedVariant(variants[0]);
    }
  };

  useEffect(() => {
    const idx = variants.findIndex((el) => el.sku === selectedVariant?.sku) ?? 0;
    if (sliderRef.current) {
      if (variants.length < 5) {
        sliderRef.current.slideTo(idx);
      } else {
        sliderRef.current.slideTo(idx - 1);
      }
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
    >
      <Button
        variant="primary"
        fill="fill"
        onClick={goBackVariant}
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
        onClick={goBackVariant}
        className={cn(
          'swiper-button-prev absolute hidden rounded-full w-[24px] h-[24px] p-0 opacity-80 lg:top-2 lg:left-1/2 lg:-translate-x-1/2 lg:block cursor-pointer z-10',
          { '!hidden': variants.length < 6 }
        )}
      >
        ^
      </Button>

      <Swiper
        className="lg:h-full lg:w-full"
        freeMode
        breakpoints={breakpointsConfig}
        onSwiper={handleInitSwiper}
        mousewheel
        modules={[Mousewheel]}
      >
        {variants.map((el) => (
          <SwiperSlide
            key={`product-variant-thumbnail-${el.id}`}
            className={cn('lg:!min-h-[120px] lg:!w-full h-full w-full cursor-pointer')}
          >
            <Image
              src={el.thumbnail}
              alt="product"
              className={cn(
                'h-[100px] lg:h-[120px] lg:w-[100px] object-cover hover:border-2 hover:border-primary',
                el.id === selectedVariant?.id && 'border-2 border-primary'
              )}
              onClick={() => setSelectedVariant(el)}
              width={120}
              height={120}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        variant="primary"
        fill="fill"
        onClick={goNextVariant}
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
        onClick={goNextVariant}
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
