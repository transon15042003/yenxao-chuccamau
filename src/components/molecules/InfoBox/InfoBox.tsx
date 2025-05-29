import { Paragraph } from '@/components/atoms/Paragraph/Paragraph';

import { cn } from '@/lib/utils';

interface DescriptionProps {
  className?: string;
  title: string;
  description: string;
  titleClass?: string;
  descClass?: string;
  titleStyle?: Record<string, string>;
}

const InfoBox = ({
  title,
  description,
  className,
  titleClass,
  descClass,
  titleStyle
}: DescriptionProps) => (
  <div className={cn('text-left', className)}>
    <Paragraph
      style={titleStyle}
      content={title}
      className={cn('font-bold text-[25px] leading-full', titleClass)}
    />
    <Paragraph content={description} className={cn('text-[20px] leading-full', descClass)} />
  </div>
);
export default InfoBox;
