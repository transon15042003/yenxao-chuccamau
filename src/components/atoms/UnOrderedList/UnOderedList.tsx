import { cn } from '@/lib/utils';

interface UnOrderedListProps {
  items: string[];
  className?: string;
}

export const UnOrderedList = ({ items, className }: UnOrderedListProps) => {
  return (
    <ul className={cn('list-disc pl-5', className)}>
      {items.map((el, idx) => (
        <li key={idx} className=" leading-[35px]">
          {el}
        </li>
      ))}
    </ul>
  );
};
