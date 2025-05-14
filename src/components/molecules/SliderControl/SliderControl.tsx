'use client';

import { LargeChevronLeftSVG } from '@/svg/LargeChevronLeftSVG/LargeChevronLeftSVG';
import { LargeChevronRightSVG } from '@/svg/LargeChevronRightSVG/LargeChevronRightSVG';
import { useState } from 'react';

import { Button } from '@/components/atoms/Button';

import { cn } from '@/lib/utils';
interface SliderControlProps {
  className?: string;
}

const SliderControl = ({ className }: SliderControlProps) => {
  const [curIdx, setCurIdx] = useState<number>(0);
  const handleSetCurIdx = (type: 'increase' | 'decrease') => {
    switch (type) {
      case 'increase':
        setCurIdx((prev) => {
          if (prev % 6 === 5) {
            return 0;
          } else return (prev % 6) + 1;
        });
        break;
      case 'decrease':
        setCurIdx((prev) => {
          if (prev === 0) {
            return 5;
          }

          return (prev % 6) - 1;
        });
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
      <p className="text-[25px] leading-[55px]">{curIdx + 1}/6</p>
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
