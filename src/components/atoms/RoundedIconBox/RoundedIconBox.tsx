import { cn } from '@/lib/utils';
import IconMap from '@/lib/utils/IconMap/IconMap';

interface RoundedIconBoxProps {
  className?: string;
  icon: string;
}

const RoundedIconBox = ({ className, icon }: RoundedIconBoxProps) => {
  const IconComponent = IconMap[icon];

  return (
    <div
      className={cn(
        'min-w-[100px] min-h-[100px] flex justify-center items-center border rounded-full border-primary',
        className
      )}
    >
      {IconComponent && <IconComponent />}
    </div>
  );
};

export default RoundedIconBox;
