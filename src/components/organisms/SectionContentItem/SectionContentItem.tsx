import IconMap from '@/components/atoms/IconMap/IconMap';
import Description from '@/components/molecules/Description';

import { cn } from '@/lib/utils';

interface SectionContentItemProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

const SectionContentItem = ({ title, description, icon, className }: SectionContentItemProps) => {
  const IconComponent = IconMap[icon];

  return (
    <div className={cn('flex items-start gap-[20px]', className)}>
      <div className="min-w-[100px] min-h-[100px] flex justify-center items-center border rounded-full border-primary">
        {IconComponent && <IconComponent />}
      </div>
      <Description title={title} description={description} />
    </div>
  );
};
export default SectionContentItem;
