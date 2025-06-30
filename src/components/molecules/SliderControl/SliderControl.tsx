'use client';

import { LargeChevronLeftSVG } from '@/svg/LargeChevronLeftSVG/LargeChevronLeftSVG';
import { LargeChevronRightSVG } from '@/svg/LargeChevronRightSVG/LargeChevronRightSVG';

import { Button } from '@/components/atoms/Button';
import { useDetailProduct } from '@/components/providers/DetailProductProvider/DetailProductProvider';

import { cn } from '@/lib/utils';
interface SliderControlProps {
  className?: string;
}

const SliderControl = ({ className }: SliderControlProps) => {
  const { selectedVariant, variants, setSelectedVariant } = useDetailProduct();
  const curIdx = variants.findIndex((el) => el.sku === selectedVariant?.sku);

  const goBackVariant = () => {
    if (curIdx > 0) {
      setSelectedVariant(variants[curIdx - 1]);
    } else {
      setSelectedVariant(variants[variants.length - 1]);
    }
    // handlePrevious();
  };

  const goNextVariant = () => {
    if (curIdx < variants.length - 1) {
      setSelectedVariant(variants[curIdx + 1]);
    } else {
      setSelectedVariant(variants[0]);
    }
    // handleNext();
  };

  return (
    <div className={cn('flex item-center gap-1 text-[24px] leading-[40px]', className)}>
      <Button
        variant="secondary"
        fill="outline"
        onClick={goBackVariant}
        className="border-none w-auto"
      >
        <LargeChevronLeftSVG />
      </Button>
      <p className="text-[25px] leading-[55px]">
        {curIdx + 1}/{variants.length}
      </p>
      <Button
        variant="secondary"
        fill="outline"
        onClick={goNextVariant}
        className="border-none w-auto"
      >
        <LargeChevronRightSVG />
      </Button>
    </div>
  );
};

export default SliderControl;
