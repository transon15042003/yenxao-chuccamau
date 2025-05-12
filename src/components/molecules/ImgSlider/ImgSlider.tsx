import Button from '@/components/atoms/Button/Button';
import Img from '@/components/atoms/Image/Image';

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
      variant="fill"
      className="absolute block top-1/2 -translate-y-1/2 left-0 rounded-full w-[24px] h-[24px] opacity-80 lg:hidden"
    >
      &lt;
    </Button>
    <Button
      variant="fill"
      className="absolute hidden rounded-full w-[24px] h-[24px] opacity-80 lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:block"
    >
      ^
    </Button>
    <Img
      src="/product.png"
      alt="product"
      className="lg:h-[113px] lg:w-[91px] object-cover col-span-3"
    />
    <Img
      src="/product.png"
      alt="product"
      className="lg:h-[113px] lg:w-[91px] object-cover col-span-3"
    />
    <Img
      src="/product.png"
      alt="product"
      className="lg:h-[113px] lg:w-[91px] object-cover col-span-3"
    />
    <Img
      src="/product.png"
      alt="product"
      className="lg:h-[113px] lg:w-[91px] object-cover col-span-3"
    />
    <Img
      src="/product.png"
      alt="product"
      className="lg:h-[113px] lg:w-[91px] object-cover col-span-3 hidden lg:block"
    />
    <Button
      variant="fill"
      className="absolute block bottom-1/2 translate-y-1/2 right-0 rounded-full w-[24px] h-[24px] opacity-80 lg:hidden"
    >
      &gt;
    </Button>
    <Button
      variant="fill"
      className="absolute hidden rounded-full w-[24px] h-[24px] opacity-80 lg:right-1/2 lg:bottom-0 lg:translate-x-1/2 lg:block"
    >
      v
    </Button>
  </div>
);

export default ImgSlider;
