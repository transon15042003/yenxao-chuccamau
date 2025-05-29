'use client';
import { ClockSVG } from '@/svg/ContactSVG/ClockSVG/ClockSVG';
import { LocationSVG } from '@/svg/ContactSVG/LocationSVG/LocationSVG';
import { MailSVG } from '@/svg/ContactSVG/MailSVG/MailSVG';
import { PhoneSVG } from '@/svg/ContactSVG/PhoneSVG/PhoneSVG';
import { ContactType } from '@/types/contact';

import { Button } from '@/components/atoms/Button';
import { ContactItem } from '@/components/molecules/ContactItem';

import { cn } from '@/lib/utils';

type SvgComponent = React.FC<React.SVGProps<SVGSVGElement> & { className?: string }>;

// Tạo một mapping (ánh xạ) từ chuỗi tên icon sang component SVG tương ứng
const iconMap: Record<string, SvgComponent> = {
  location: LocationSVG,
  phone: PhoneSVG,
  email: MailSVG,
  clock: ClockSVG
};

const getIconComponent = (iconName: string): React.ReactElement | null => {
  const IconComponent = iconMap[iconName];

  if (IconComponent) {
    return <IconComponent className="mr-3.5" />;
  }

  return null;
};

type ContactInfoBlockProps = {
  className?: string;
  contactData: ContactType[];
  onScrollToMap?: () => void;
};

export const ContactInfoBlock = (props: ContactInfoBlockProps) => {
  return (
    <div className={cn(`p-10 relative overflow-hidden`, props.className)}>
      <div
        className="absolute bottom-0 right-40 w-full h-full bg-repeat bg-contain origin-bottom-left"
        style={{
          backgroundImage: `url('/images/backgrounds/img_multi_line.svg')`,
          top: '20%'
        }}
      ></div>

      <div
        className={cn(
          'relative z-10 p-6 bg-white rounded-lg flex justify-center lg:justify-start items-center h-[442px]'
        )}
      >
        {' '}
        {/* When allowing to display email, working hours, remove ' items-center h-[442px]' */}
        <div className="lg:ml-12 w-[321px]">
          {props.contactData[0].data.map((item, index) => {
            if (index < 2)
              // When allowing to display email, working hours, remove this condition
              return (
                <ContactItem
                  key={index}
                  icon={getIconComponent(item.icon)}
                  label={item.label}
                  details={item.details}
                />
              );
          })}

          <Button
            className={cn(
              'w-full',
              'text-base font-bold',
              'py-[10px] mt-6',
              'rounded-[10px] border-2 border-typo-1'
            )}
            variant="secondary"
            fill="outline"
            onClick={props.onScrollToMap}
          >
            Xem bản đồ
          </Button>
        </div>
      </div>
    </div>
  );
};
