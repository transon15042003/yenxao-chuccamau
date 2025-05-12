import Discount from '@/components/atoms/Discount/Discount';
import Img from '@/components/atoms/Image/Image';
import SliderControl from '@/components/molecules/SliderControl/SliderControl';

import { cn } from '@/lib/utils';

interface ProductInfoPanelProps {
  className?: string;
}

const ProductInfoPanel = ({ className }: ProductInfoPanelProps) => (
  <div className={cn('relative w-full h-auto', className)}>
    <Img src="/product.png" alt="product" className="h-full object-cover" />
    <Discount discount={20} className="absolute top-[10px] left-[10px] w-[55px] text-center" />
    <SliderControl className="absolute bottom-[10px] right-[10px] text-[#424B5A]" />
  </div>
);

export default ProductInfoPanel;
