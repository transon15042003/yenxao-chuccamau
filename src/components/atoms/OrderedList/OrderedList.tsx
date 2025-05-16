import { cn } from '@/lib/utils';

interface OrderedListProps {
  items: string[];
  className?: string;
}

export const OrderedList = ({ items, className }: OrderedListProps) => {
  return (
    <ol className={cn('list-decimal pl-5', className)}>
      {items.map((el, idx) => (
        <li key={idx} className=" leading-[35px]">
          {el}
        </li>
      ))}
    </ol>
  );
};
