import Button from '@/components/atoms/Button/Button';

import { cn } from '@/lib/utils';
interface SliderControlProps {
  className?: string;
}

const SliderControl = ({ className }: SliderControlProps) => (
  <div className={cn('flex item-center gap-1 text-[24px] leading-[40px]', className)}>
    <Button variant="text" className="text-[40px]">
      &lt;
    </Button>
    <p className="text-[25px]">1/6</p>
    <Button variant="text" className="text-[40px]">
      &gt;
    </Button>
  </div>
);

export default SliderControl;
