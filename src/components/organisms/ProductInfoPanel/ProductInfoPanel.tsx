'use client';
import Image from 'next/image';

// import { Badge } from '@/components/atoms/Badge';
import SliderControl from '@/components/molecules/SliderControl/SliderControl';
import { useDetailProduct } from '@/components/providers/DetailProductProvider/DetailProductProvider';

import { cn } from '@/lib/utils';

interface ProductInfoPanelProps {
  className?: string;
}

const ProductInfoPanel = ({ className }: ProductInfoPanelProps) => {
  const { selectedVariant } = useDetailProduct();

  return (
    <div className={cn('relative w-full h-[640px] lg:pr-8 lg:pl-4', className)}>
      <Image
        src={selectedVariant?.thumbnail || '/images/placeholder.webp'}
        alt="product"
        className="h-[640px] w-full object-cover"
        width={600}
        height={640}
        unoptimized
      />
      {/* <Badge content="20%" className="absolute top-2 left-[32px]" /> */}
      <SliderControl className="absolute lg:bottom-[40px] lg:right-[40px] bottom-4 right-4 text-[#424B5A]" />
    </div>
  );
};

export default ProductInfoPanel;
