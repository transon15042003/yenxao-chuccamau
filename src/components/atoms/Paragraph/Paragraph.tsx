import { cn } from '@/lib/utils';

interface ParagraphProps {
  children: string;
  className?: string;
}

export const Paragraph = ({ children, className }: ParagraphProps) => (
  <p className={cn('text-[18xp] text-[#2A2A40] leading-[35px]', className)}>{children}</p>
);
