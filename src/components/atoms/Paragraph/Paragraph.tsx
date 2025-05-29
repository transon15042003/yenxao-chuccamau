import { cn } from '@/lib/utils';

interface ParagraphProps {
  content: string;
  className?: string;
  style?: Record<string, string>;
}

export const Paragraph = ({ content, className, style }: ParagraphProps) => (
  <p
    className={cn('text-[18px] text-[#2A2A40] leading-[35px]', className)}
    style={style}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);
