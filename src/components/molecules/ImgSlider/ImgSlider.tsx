import Image from 'next/image';

import { Button } from '@/components/atoms/Button';

import { cn } from '@/lib/utils';

interface ImgSliderProps {
  className?: string;
}

const ImgSlider = ({ className }: ImgSliderProps) => (
  <div
    className={cn(
      'grid grid-cols-12 gap-2 relative lg:w-[100px] lg:flex lg:flex-col lg:justify-between lg:items-center',
      className
    )}
  >
    <Button
      variant="primary"
      fill="fill"
      className="absolute block top-1/2 -translate-y-1/2 left-0 rounded-full p-0 w-[24px] h-[24px] opacity-80 lg:hidden"
    >
      &lt;
    </Button>
    <Button
      variant="primary"
      fill="fill"
      className="absolute hidden rounded-full w-[24px] h-[24px] p-0 opacity-80 lg:top-2 lg:left-1/2 lg:-translate-x-1/2 lg:block"
    >
      ^
    </Button>
    <Image
      width={100}
      height={100}
      src="/product.png"
      alt="product"
      className="lg:h-[113px] lg:w-[91px] object-cover col-span-3"
    />
    <Image
      width={100}
      height={100}
      src="/product.png"
      alt="product"
      className="lg:h-[113px] lg:w-[91px] object-cover col-span-3"
    />
    <Image
      width={100}
      height={100}
      src="/product.png"
      alt="product"
      className="lg:h-[113px] lg:w-[91px] object-cover col-span-3"
    />
    <Image
      width={100}
      height={100}
      src="/product.png"
      alt="product"
      className="lg:h-[113px] lg:w-[91px] object-cover col-span-3"
    />
    <Image
      width={100}
      height={100}
      src="/product.png"
      alt="product"
      className="lg:h-[113px] lg:w-[91px] object-cover col-span-3 hidden lg:block"
    />
    <Button
      variant="primary"
      fill="fill"
      className="absolute block bottom-1/2 translate-y-1/2 right-0 rounded-full p-0 w-[24px] h-[24px] opacity-80 lg:hidden"
    >
      &gt;
    </Button>
    <Button
      variant="primary"
      fill="fill"
      className="absolute hidden rounded-full w-[24px] h-[24px] p-0 opacity-80 lg:right-1/2 lg:bottom-2 lg:translate-x-1/2 lg:block"
    >
      v
    </Button>
  </div>
);

export default ImgSlider;
