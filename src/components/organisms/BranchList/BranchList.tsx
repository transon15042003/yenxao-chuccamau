import { ClockSVG } from '@/svg/ContactSVG/ClockSVG/ClockSVG';
import { LocationSVG } from '@/svg/ContactSVG/LocationSVG/LocationSVG';
import { MailSVG } from '@/svg/ContactSVG/MailSVG/MailSVG';
import { PhoneSVG } from '@/svg/ContactSVG/PhoneSVG/PhoneSVG';
import { ContactType } from '@/types/contact';

import { ContactItem } from '@/components/molecules/ContactItem';

type BranchListProps = {
  className?: string;
  contactData: ContactType[];
};

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

export const BranchList = (props: BranchListProps) => {
  if (!props.contactData || props.contactData.length === 0) {
    return (
      <div className={props.className}>
        <p>Không có thông tin chi nhánh nào để hiển thị.</p>
      </div>
    );
  }

  return (
    <div className={`${props.className} overflow-y-auto flex flex-col items-center`}>
      {props.contactData.map((branch, branchIndex) => (
        <div key={branchIndex} className="w-5/6">
          {branch['branchName'] && (
            <h3 className="text-xl font-bold text-primary mb-4">{branch['branchName']}</h3>
          )}

          {Array.isArray(branch.data) &&
            branch.data.map((item, itemIndex) => {
              const IconJsxElement = getIconComponent(item.icon);

              if (!IconJsxElement) {
                return null;
              }

              return (
                <ContactItem
                  key={`${branchIndex}-${itemIndex}`}
                  icon={IconJsxElement}
                  label={item.label}
                  details={item.details}
                />
              );
            })}
        </div>
      ))}
    </div>
  );
};
