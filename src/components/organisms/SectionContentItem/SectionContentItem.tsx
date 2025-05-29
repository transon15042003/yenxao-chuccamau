import RoundedIconBox from '@/components/atoms/RoundedIconBox/RoundedIconBox';
import InfoBox from '@/components/molecules/InfoBox';

import { cn } from '@/lib/utils';

interface SectionContentItemProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
  titleClass?: string;
  descClass?: string;
}

const SectionContentItem = ({
  title,
  description,
  icon,
  className,
  titleClass,
  descClass
}: SectionContentItemProps) => {
  return (
    <div className={cn('flex items-start gap-[20px]', className)}>
      <RoundedIconBox icon={icon} />
      <InfoBox
        title={title}
        description={description}
        titleClass={titleClass}
        descClass={descClass}
      />
    </div>
  );
};
export default SectionContentItem;
