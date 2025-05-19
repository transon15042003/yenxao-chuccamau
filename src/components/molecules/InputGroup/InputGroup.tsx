import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

type InputGroupProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorMessage?: string;
};

export const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(function InputGroup(
  { label, labelClassName, inputClassName, errorMessage, className, ...restInputProps },
  ref
) {
  return (
    <div className={cn('w-full flex flex-col gap-1', className)}>
      {label && (
        <label
          htmlFor={restInputProps.id}
          className={cn(
            'text-xs text-typo-1',
            restInputProps.disabled ? 'text-[#929292]' : '',
            labelClassName
          )}
        >
          {label} {restInputProps.required && <span className="text-primary">*</span>}
        </label>
      )}

      <input
        ref={ref}
        type="text"
        {...restInputProps}
        className={cn(
          'border-[2px] border-typo-1 rounded-[8px] px-4 py-2.5 text-typo-1',
          'placeholder:text-[#929292]',
          'focus:outline-none focus:ring-0 focus:border-[#F1B500] transition-all duration-75',
          'disabled:bg-[#F5F5F5] disabled:text-[#929292] disabled:border-[#F5F5F5] disabled:cursor-not-allowed',
          inputClassName
        )}
      />

      {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
    </div>
  );
});
