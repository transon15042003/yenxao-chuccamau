import { cn } from '@/lib/utils';

interface ParagraphProps {
  content: string;
  className?: string;
}

export const Paragraph = ({ content, className }: ParagraphProps) => (
  <p
    className={cn('text-[18px] text-[#2A2A40] leading-[35px]', className)}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);
