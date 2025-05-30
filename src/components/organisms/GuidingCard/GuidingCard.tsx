import RoundedIconBox from '@/components/atoms/RoundedIconBox/RoundedIconBox';
import InfoBox from '@/components/molecules/InfoBox';

import { cn } from '@/lib/utils';

interface GuidingCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
  styles?: React.CSSProperties;
}

const GuidingCard = ({ icon, title, description, className, styles }: GuidingCardProps) => {
  return (
    <div
      className={cn(
        "bg-[url('/images/introduction/guiding_principle_bg.png')] bg-no-repeat bg-contain w-full rounded-[10px]",
        className
      )}
      style={styles}
    >
      <RoundedIconBox
        icon={icon}
        className="w-[100px] h-[100px] bg-white bg-opacity-50 mt-[44px] ml-[28px]"
      />
      <InfoBox
        title={title}
        description={description}
        className="mt-[40px] ml-[28px] mr-[54px] mb-[106px] w-[75%]"
        titleClass="gradient-text"
        descClass="text-white text-[18px]"
      />
    </div>
  );
};

export default GuidingCard;
