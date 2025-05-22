import Description from '@/components/molecules/Description';
import RoundedIconBox from '@/components/molecules/RoundedIconBox/RoundedIconBox';

import { cn } from '@/lib/utils';

interface SectionContentItemProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

const SectionContentItem = ({ title, description, icon, className }: SectionContentItemProps) => {
  return (
    <div className={cn('flex items-start gap-[20px]', className)}>
      <RoundedIconBox icon={icon} />
      <Description title={title} description={description} />
    </div>
  );
};
export default SectionContentItem;
