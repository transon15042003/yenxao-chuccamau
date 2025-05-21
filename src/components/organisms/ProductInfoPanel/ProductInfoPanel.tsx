// import Discount from '@/components/atoms/Discount/Discount';
import Image from 'next/image';

import { Badge } from '@/components/atoms/Badge';
import SliderControl from '@/components/molecules/SliderControl/SliderControl';

import { cn } from '@/lib/utils';

interface ProductInfoPanelProps {
  className?: string;
}

const ProductInfoPanel = ({ className }: ProductInfoPanelProps) => (
  <div className={cn('relative w-full h-auto', className)}>
    <Image
      width={100}
      height={100}
      src="/product.png"
      alt="product"
      className="h-full w-full object-cover"
    />
    {/* <Discount discount={20} className="absolute top-[10px] left-[10px] w-[55px] text-center" /> */}
    <Badge content="20%" className="absolute top-2 left-2" />
    <SliderControl className="absolute bottom-[10px] right-[10px] text-[#424B5A]" />
  </div>
);

export default ProductInfoPanel;
