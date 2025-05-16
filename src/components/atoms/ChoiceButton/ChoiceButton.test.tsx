import { render, screen } from '@/tests/test-utils';

import { ChoiceButton } from '.';

describe('ChoiceButton', () => {
  // Test case 1: Render với tiêu đề đúng
  test('renders with the correct title', () => {
    const title = 'Test Button Title';
    render(<ChoiceButton title={title} />);

    const buttonElement = screen.getByText(title);

    expect(buttonElement).toBeInTheDocument();
  });

  // Test case 2: Áp dụng style khi selected là true
  test('applies selected styles when selected prop is true', () => {
    const title = 'Selected Button';
    render(<ChoiceButton title={title} selected={true} />); // Render component với selected={true}

    // Tìm kiếm phần tử button chứa văn bản tiêu đề
    const buttonElement = screen.getByText(title).closest('button'); // Lấy phần tử button cha

    // Khẳng định phần tử button có class cho trạng thái selected
    // Lưu ý: Các class Tailwind CSS có thể cần cấu hình Jest/Vitest để xử lý đúng
    // Chúng ta kiểm tra xem class gradient có tồn tại không
    expect(buttonElement).toHaveClass('bg-gradient-to-b');
    expect(buttonElement).toHaveClass('font-bold');
  });

  // Test case 3: Không áp dụng style khi selected là false
  test('does not apply selected styles when selected prop is false', () => {
    const title = 'Default Button';
    render(<ChoiceButton title={title} selected={false} />); // Render component với selected={false}

    const buttonElement = screen.getByText(title).closest('button');

    // Khẳng định phần tử button không có class cho trạng thái selected
    expect(buttonElement).not.toHaveClass('bg-gradient-to-b');
    expect(buttonElement).not.toHaveClass('font-bold');
  });

  // Test case 4: Áp dụng custom className
  test('applies custom className', () => {
    const title = 'Button with Custom Class';
    const customClass = 'custom-tailwind-class';
    render(<ChoiceButton title={title} className={customClass} />);

    const buttonElement = screen.getByText(title).closest('button');

    // Khẳng định phần tử button có class tùy chỉnh
    expect(buttonElement).toHaveClass(customClass);
  });
});
