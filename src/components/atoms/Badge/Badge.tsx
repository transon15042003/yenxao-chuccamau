import { cn } from '@/lib/utils';
type BadgeProps = {
  className?: string;
  content: string;
};
export const Badge = ({ className, content }: BadgeProps) => (
  <div
    className={cn(
      'w-fit',
      'rounded-full bg-secondary-gradient-90 text-typo-2 font-semibold px-2.5 py-1',
      className
    )}
  >
    <span>{content}</span>
  </div>
);
