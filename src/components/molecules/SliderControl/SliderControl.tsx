import { Button } from '@/components/atoms/Button';

import { cn } from '@/lib/utils';
interface SliderControlProps {
  className?: string;
}

const SliderControl = ({ className }: SliderControlProps) => (
  <div className={cn('flex item-center gap-1 text-[24px] leading-[40px]', className)}>
    <Button variant="secondary" fill="outline" className="text-[40px] border-none w-auto">
      &lt;
    </Button>
    {/* Set line height equal height */}
    <p className="text-[25px]">1/6</p>
    <Button variant="secondary" fill="outline" className="text-[40px] border-none w-auto">
      &gt;
    </Button>
  </div>
);

export default SliderControl;
