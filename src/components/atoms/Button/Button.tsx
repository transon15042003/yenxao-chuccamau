import { cn } from '@/lib/utils';

interface ButtonProps {
  variant: 'fill' | 'outline' | 'text';
  children: React.ReactNode;
  className?: string;
}

const btnStyle = {
  fill: 'rounded-[5px] bg-[#D62C35] text-white cursor-pointer',
  outline: 'border border-[2A2A40] rounded-[5px] bg-transparent text-[2A2A40] cursor-pointer',
  text: 'cursor-pointer'
};

const Button = ({ variant, children, className }: ButtonProps) => (
  <button className={cn('text-center', btnStyle[variant], className)}>{children}</button>
);

export default Button;
