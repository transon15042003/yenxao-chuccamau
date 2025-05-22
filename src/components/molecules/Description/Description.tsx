import { Paragraph } from '@/components/atoms/Paragraph/Paragraph';

import { cn } from '@/lib/utils';

interface DescriptionProps {
  className?: string;
  title: string;
  description: string;
}

const Description = ({ title, description, className }: DescriptionProps) => (
  <div className={cn('text-left', className)}>
    <Paragraph content={title} className="font-bold text-[25px] leading-full" />
    <Paragraph content={description} className="text-[20px] leading-full" />
  </div>
);
export default Description;
