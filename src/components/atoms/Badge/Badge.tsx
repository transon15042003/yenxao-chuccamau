import { cn } from '@/lib/utils';
type BadgeProps = {
  type?: 'info' | 'warning';
  className?: string;
  content: string;
};
export const Badge = ({ className, content, type = 'info' }: BadgeProps) => {
  const bgColor = type === 'info' ? 'bg-secondary-gradient-90' : 'bg-warning-gradient-90';

  return (
    <div
      className={cn(
        'w-fit',
        'rounded-full text-typo-2 font-semibold px-2.5 py-1',
        bgColor,
        className
      )}
    >
      <span>{content}</span>
    </div>
  );
};
