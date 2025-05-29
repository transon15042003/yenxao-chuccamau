import Image from 'next/image';

import Description from '@/components/molecules/InfoBox';

import { cn } from '@/lib/utils';

interface StepProps {
  className?: string;
  img: string;
  title: string;
  desc: string;
  position: 'left' | 'right';
  display: 'inline' | 'topdown';
}

const ProductionStep = ({ className, img, title, desc, position, display }: StepProps) => {
  return (
    <div
      className={cn(
        'items-center lg:max-w-[50%] h-auto',
        position === 'left' ? 'flex flex-row' : 'flex flex-row-reverse',
        className
      )}
    >
      <div
        className={cn(
          'items-center w-full h-auto',
          position === 'left' ? 'flex flex-row' : 'flex flex-row-reverse',
          display === 'topdown' && 'flex flex-col-reverse gap-1 items-start text-start'
        )}
      >
        <Description
          title={title}
          description={desc}
          descClass="text-[18px]"
          className={cn(
            'h-auto',
            position === 'left' ? 'mr-[30px] text-right' : 'lg:ml-[30px]',
            display === 'topdown' && 'mb-6 ml-[56px]'
          )}
        />
        <span className={cn(display === 'topdown' && 'flex flex-row items-center')}>
          {display === 'topdown' && (
            <span className="block bg-[#D93434] min-w-[16px] min-h-[16px] w-[16px] h-[16px] rounded-full" />
          )}
          {display === 'topdown' && (
            <span className="block max-w-[60px] min-w-[40px] h-1 border-t-4 border-dashed border-primary" />
          )}
          <span className="relative p-1 rounded-lg bg-gradient-to-r from-[#E6B522] via-[#FFF788] to-[#FFE059] overflow-hidden block max-w-[200px] max-h-[200px]">
            <Image
              src={img}
              alt="step"
              width={200}
              height={200}
              className="h-[192px] min-w-[192px] object-cover"
            />
          </span>
          {/* <Image
            src={img}
            alt="step"
            width={200}
            height={200}
            className="h-[200px] min-w-[200px] object-cover"
          /> */}
        </span>
      </div>
      <span
        className={cn(
          'block max-w-[60px] min-w-[40px] h-1 border-t-4 border-dashed border-primary',
          display === 'topdown' && 'hidden'
        )}
      />
      <span
        className={cn(
          'block bg-[#D93434] min-w-[16px] min-h-[16px] w-[16px] h-[16px] rounded-full',
          display === 'topdown' && 'hidden'
        )}
      />
    </div>
  );
};

export default ProductionStep;
