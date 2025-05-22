import { TextStack } from '@/components/atoms/TextStack';

type ContactItemProps = {
  icon: React.ReactNode;
  label: string;
  details: string | string[];
  className?: string;
};

export const ContactItem = (props: ContactItemProps) => (
  <div className="flex items-start mb-7">
    {props.icon}
    <TextStack label={props.label} details={props.details} />
  </div>
);
