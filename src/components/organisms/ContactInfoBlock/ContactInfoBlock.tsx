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

  console.warn(`Icon component not found for name: ${iconName}. Please add it to iconMap.`);

  return null;
};

type ContactInfoBlockProps = {
  className?: string;
  contactData: ContactType[];
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

      <div className="relative z-10 p-6 bg-white rounded-lg flex justify-center">
        <div className="w-3/4">
          {props.contactData[0].data.map((item, index) => {
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
            className="w-full text-base font-bold py-[10px] mt-6"
            variant="secondary"
            fill="outline"
            onClick={() => alert('Open map view')}
          >
            Xem bản đồ
          </Button>
        </div>
      </div>
    </div>
  );
};
