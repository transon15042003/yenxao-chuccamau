import Image from 'next/image';

import Description from '@/components/molecules/Description';

import { cn } from '@/lib/utils';

interface StepProps {
  className?: string;
  img: string;
  title: string;
  desc: string;
  position: 'left' | 'right';
  display: 'inline' | 'topdown';
}

const Step = ({ className, img, title, desc, position, display }: StepProps) => {
  return (
    <div
      className={cn(
        'items-center lg:max-w-[50%]',
        position === 'left' ? 'flex flex-row' : 'flex flex-row-reverse',
        className
      )}
    >
      <div
        className={cn(
          'items-center',
          position === 'left' ? 'flex flex-row' : 'flex flex-row-reverse',
          display === 'topdown' && 'flex flex-col-reverse gap-1 items-start text-start'
        )}
      >
        <Description
          title={title}
          description={desc}
          descClass="text-[18px]"
          className={cn(
            position === 'left' ? 'mr-[30px] text-right' : 'lg:ml-[30px]',
            display === 'topdown' && 'mb-6 ml-[56px]'
          )}
        />
        <span className={cn(display === 'topdown' && 'flex flex-row items-center')}>
          {display === 'topdown' && (
            <span className="block bg-[#D93434] min-w-[16px] min-h-[16px] w-[16px] h-[16px] rounded-full" />
          )}
          {display === 'topdown' && (
            <span className="block bg-[#D93434] max-w-[60px] min-w-[40px] border-dashed border-[3px]" />
          )}
          <span
            style={{
              borderRadius: '5px',
              padding: '4px',
              background: 'linear-gradient(to right, #E6B522, #FFF788, #FFE059)',
              display: 'inline-block'
            }}
          >
            <Image
              src={img}
              alt="step"
              width={200}
              height={200}
              style={{
                background: 'white',
                borderRadius: '8px',
                height: '200px',
                minWidth: '200px',
                objectFit: 'cover'
              }}
            />
          </span>
        </span>
      </div>
      <span
        className={cn(
          'block bg-[#D93434] max-w-[60px] min-w-[40px] border-dashed border-[3px]',
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

export default Step;
