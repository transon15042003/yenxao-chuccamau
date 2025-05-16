import { cn } from '@/lib/utils';

interface DiscountProps {
  discount?: number;
  className?: string;
}
const Discount = ({ discount, className }: DiscountProps) => (
  <div
    className={cn(
      'rounded-[30px] bg-gradient-to-r from-[#E6B522] via-[#FFF788] to-[#FFE059] px-1',
      className
    )}
  >
    {discount && `-${discount}%`}
  </div>
);

export default Discount;
