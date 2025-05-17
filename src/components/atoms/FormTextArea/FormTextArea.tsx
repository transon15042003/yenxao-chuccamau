// FormTextArea.tsx
import { forwardRef } from 'react'; // Cần forwardRef

import { cn } from '@/lib/utils'; // Sử dụng utility cn của bạn

// Định nghĩa kiểu props cho FormTextArea, dựa trên HTMLTextAreaElement
type FormTextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  className?: string;
  labelClassName?: string;
  textareaClassName?: string; // Đặt tên prop cho class của thẻ textarea
  errorMessage?: string;
  line?: number | undefined; // Prop để xác định số dòng, sẽ map sang 'rows'
};

export const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>( // forwardRef tới HTMLTextAreaElement
  function FormTextArea(
    {
      label,
      labelClassName,
      textareaClassName,
      errorMessage,
      className,
      line = 4, // Giá trị mặc định cho số dòng nếu không được cung cấp
      ...restTextareaProps // Thu thập các props input tiêu chuẩn và props textarea
    },
    ref // Nhận ref để forward
  ) {
    return (
      <div className={cn('w-full flex flex-col gap-1', className)}>
        {/* Logic hiển thị Label (sao chép từ InputGroup) */}
        {label && (
          <label
            htmlFor={restTextareaProps.id}
            className={cn(
              'text-xs text-typo-1',
              restTextareaProps.disabled ? 'text-[#929292]' : '',
              labelClassName
            )}
          >
            {label} {restTextareaProps.required && <span className="text-primary">*</span>}
          </label>
        )}

        {/* Thẻ textarea */}
        <textarea
          ref={ref} // Forward ref
          rows={line} // Sử dụng prop line cho thuộc tính rows
          {...restTextareaProps} // Rải các props (value, onChange, onBlur, placeholder, id, ...)
          className={cn(
            // Sao chép các class styling từ thẻ <input> trong InputGroup để đồng bộ giao diện
            'border-[2px] border-typo-1 rounded-[8px] px-4 py-2.5 text-typo-1',
            'placeholder:text-[#929292]',
            'focus:outline-none focus:ring-0 focus:border-[#F1B500] transition-all duration-75',
            'disabled:bg-[#F5F5F5] disabled:text-[#929292] disabled:border-[#F5F5F5] disabled:cursor-not-allowed',
            // Thêm class cho textarea nếu cần thiết
            textareaClassName
          )}
        />

        {/* Logic hiển thị Error Message (sao chép từ InputGroup) */}
        {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
      </div>
    );
  }
);
