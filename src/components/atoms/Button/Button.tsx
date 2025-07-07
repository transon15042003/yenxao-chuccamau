import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  fill?: 'fill' | 'outline';
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
};
export const Button = ({
  type = 'submit',
  className,
  variant = 'primary',
  children,
  fill = 'fill',
  disabled = false,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    disabled={disabled}
    type={type}
    className={cn(
      'rounded-[5px] w-[250px] py-1.5 font-medium px-4 hover:opacity-80 transition-all duration-75',
      variant === 'primary' ? 'bg-primary text-white' : 'bg-secondary text-typo-1',
      fill === 'outline' ? 'bg-transparent border border-primary' : '',
      disabled ? 'opacity-50 cursor-not-allowed hover:opacity-50' : '',
      className
    )}
  >
    {children}
  </button>
);
