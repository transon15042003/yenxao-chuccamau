import Button from '@/components/atoms/Button/Button';
import Discount from '@/components/atoms/Discount/Discount';
import { SectionHeading } from '@/components/atoms/Heading';
import Img from '@/components/atoms/Image/Image';
import { SectionSubHeading } from '@/components/atoms/SubHeading';

import { cn } from '@/lib/utils';

interface ProductCartProps {
  className?: string;
}

const ProductCart = ({ className }: ProductCartProps) => (
  <div
    className={cn(
      'min-w-[184px] p-2 border border-[#C2D1D9] rounded-[5px] relative lg:min-w-[260px] lg:py-[30px]',
      className
    )}
  >
    <Discount discount={20} className="absolute text-[14px]" />
    <Img src="/product.png" alt="Product" />
    <SectionHeading className="text-[14px] line-clamp-2 lg:text-[20px] text-[#2A2A40] mt-3">
      Yến chưng tươi nguyên chất 100%, hộp 6 lọ x 70 gram
    </SectionHeading>
    <div className="item-center mt-2">
      <SectionSubHeading className="inline-block line-through text-[12px] lg:text-[16px]">
        10.000.000đ
      </SectionSubHeading>
      <SectionHeading className="inline-block text-[14px] ml-1 lg:text-[18px] lg:ml-2">
        10.000.000đ
      </SectionHeading>
    </div>
    <div className="h-[16px] flex rounded-[20px] bg-[#A8A8A8] bg-opacity-15 my-2">
      <Discount className="h-full w-[40px]" />
      <p className="text-[12px] flex-1 text-center leading-[18px] lg:text-[16px]">Đã bán 150</p>
    </div>
    <div className="flex justify-between gap-2 h-[36px] lg:h-[40px]">
      <Button variant="fill" className="flex-1">
        Mua ngay
      </Button>
      <Button variant="outline" className="min-w-[36px]">
        Cart
      </Button>
    </div>
  </div>
);

export default ProductCart;
