'use client';

import { LargeChevronLeftSVG } from '@/svg/LargeChevronLeftSVG/LargeChevronLeftSVG';
import { LargeChevronRightSVG } from '@/svg/LargeChevronRightSVG/LargeChevronRightSVG';
import { useState } from 'react';

import { Button } from '@/components/atoms/Button';
import { useDetailProduct } from '@/components/providers/DetailProductProvider/DetailProductProvider';

import { cn } from '@/lib/utils';
interface SliderControlProps {
  className?: string;
}

const SliderControl = ({ className }: SliderControlProps) => {
  const [curIdx, setCurIdx] = useState<number>(0);
  const { handleSetSize, handleSetFlavor, handleSetThumbnail, curSize, curFlavor, variants } =
    useDetailProduct();

  const handleSetCurIdx = (type: 'increase' | 'decrease') => {
    const length = variants.length;
    const varIdx = variants.findIndex(
      (el) => el.specs.size === curSize && el.specs.savour === curFlavor
    );

    switch (type) {
      case 'increase':
        setCurIdx((prev) => {
          if (prev % length === length - 1) {
            return 0;
          } else return (prev % length) + 1;
        });

        if (varIdx !== -1 && varIdx !== undefined) {
          const nextIdx = (varIdx + 1) % length;
          handleSetSize(variants[nextIdx].specs.size);
          handleSetFlavor(variants[nextIdx].specs.savour);
          handleSetThumbnail(variants[nextIdx].thumbnail);
        }
        break;
      case 'decrease':
        setCurIdx((prev) => {
          if (prev === 0) {
            return length - 1;
          }

          return (prev % length) - 1;
        });

        if (varIdx !== -1 && varIdx !== undefined) {
          const prevIdx = varIdx === 0 ? length - 1 : varIdx - 1;
          handleSetSize(variants[prevIdx].specs.size);
          handleSetFlavor(variants[prevIdx].specs.savour);
          handleSetThumbnail(variants[prevIdx].thumbnail);
        }
        break;
      default:
        console.warn('Does not have ', type);
    }
  };

  return (
    <div className={cn('flex item-center gap-1 text-[24px] leading-[40px]', className)}>
      <Button
        variant="secondary"
        fill="outline"
        onClick={() => handleSetCurIdx('decrease')}
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
        onClick={() => handleSetCurIdx('increase')}
        className="border-none w-auto"
      >
        <LargeChevronRightSVG />
      </Button>
    </div>
  );
};

export default SliderControl;
