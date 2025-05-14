import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  fill?: 'fill' | 'outline';
};
export const Button = ({
  className,
  variant = 'primary',
  children,
  fill = 'fill',
  ...props
}: ButtonProps) => (
  <button
    {...props}
    className={cn(
      'rounded-[5px] w-[250px] py-1.5 font-medium px-4',
      variant === 'primary' ? 'bg-primary text-white' : 'bg-secondary text-typo-1',
      fill === 'outline' ? 'bg-transparent border border-primary' : '',
      className
    )}
  >
    {children}
  </button>
);
