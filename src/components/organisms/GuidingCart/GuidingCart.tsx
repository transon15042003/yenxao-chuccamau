import RoundedIconBox from '@/components/atoms/RoundedIconBox/RoundedIconBox';
import InfoBox from '@/components/molecules/InfoBox';

import { cn } from '@/lib/utils';

interface GuidingCartProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
  styles?: React.CSSProperties;
}

const GuidingCart = ({ icon, title, description, className, styles }: GuidingCartProps) => {
  return (
    <div
      className={cn(
        "bg-[url('/images/introduction/guiding_principle_bg.png')] bg-no-repeat bg-cover border-[4px] border-[#CCB182] rounded-[16px]",
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
        className="mt-[40px] ml-[28px] mr-[54px] mb-[106px]"
        titleClass="gradient-text"
        descClass="text-white text-[18px]"
      />
    </div>
  );
};

export default GuidingCart;
