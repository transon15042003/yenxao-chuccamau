import Image from 'next/image';

import { cn } from '@/lib/utils';

type PanelProps = {
  imageSrc?: string;
  className?: string;
};

export const Panel = (props: PanelProps) => {
  return (
    <div
      data-testid="panel-container"
      className={cn(
        'relative w-full overflow-hidden',
        props.className || '',
        'h-[268px] lg:h-[583px]'
      )}
    >
      <Image
        src={props.imageSrc || '/images/backgrounds/img_panel.svg'}
        alt="Panel background image"
        className={cn(
          'absolute inset-0 w-full h-full object-cover',
          'object-[90%_50%] lg:object-center'
        )}
        fill
        unoptimized={true}
      />
    </div>
  );
};
