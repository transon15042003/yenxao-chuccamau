import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'; // Import các matchers hữu ích như toBeInTheDocument

// Import component cần test
import { DirectionControl } from './DirectionControl';

// Tạo một mock function cho prop onClick để kiểm tra xem nó có được gọi không
const mockOnClick = jest.fn();

// Bắt đầu mô tả bộ test cho component DirectionControl
describe('DirectionControl (Basic Tests)', () => {
  // Đảm bảo mock function được reset trạng thái trước mỗi bài test
  beforeEach(() => {
    mockOnClick.mockClear();
  });

  // Test Case 1: Component render mà không gặp lỗi và hiển thị phần tử button
  test('renders the button element', () => {
    // Render component với prop onClick (bắt buộc)
    render(<DirectionControl onClick={mockOnClick} />);

    // Tìm phần tử button trong DOM ảo.
    // Chúng ta sử dụng getByRole với role 'button' và name (Accessible Name)
    // Accessible Name mặc định là 'Next' khi direction không được set hoặc là true
    const buttonElement = screen.getByRole('button', { name: 'Next' });

    // Khẳng định rằng phần tử button đã được render và có trong tài liệu
    expect(buttonElement).toBeInTheDocument();
  });

  // Test Case 2: Khi click vào button, hàm onClick được gọi
  test('calls the onClick function when clicked', () => {
    // Render component
    render(<DirectionControl onClick={mockOnClick} />);

    // Tìm phần tử button
    const buttonElement = screen.getByRole('button', { name: 'Next' });

    // Mô phỏng sự kiện click trên button
    fireEvent.click(buttonElement);

    // Khẳng định rằng mockOnClick function đã được gọi chính xác 1 lần
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  // Test Case 3: Áp dụng aria-label chính xác khi direction là false (hướng trái)
  test('applies "Previous" aria-label when direction is false', () => {
    // Render component với direction = false
    render(<DirectionControl onClick={mockOnClick} direction={false} />);

    // Tìm phần tử button sử dụng aria-label là 'Previous'
    const buttonElement = screen.getByRole('button', { name: 'Previous' });

    // Khẳng định rằng button với nhãn đúng tồn tại
    expect(buttonElement).toBeInTheDocument();
    // Kiểm tra thêm thuộc tính aria-label trực tiếp
    expect(buttonElement).toHaveAttribute('aria-label', 'Previous');
  });

  // Test Case 4: Áp dụng className tùy chỉnh được truyền vào
  test('applies the custom className prop', () => {
    // Định nghĩa một class tùy chỉnh để test
    const customClassName = 'test-custom-style';
    // Render component với className tùy chỉnh
    render(<DirectionControl onClick={mockOnClick} className={customClassName} />);

    // Tìm phần tử button (sử dụng nhãn mặc định vì className không ảnh hưởng aria-label)
    const buttonElement = screen.getByRole('button', { name: 'Next' });

    // Khẳng định rằng button có chứa class tùy chỉnh đó
    expect(buttonElement).toBeInTheDocument(); // Đảm bảo tìm thấy button trước
    expect(buttonElement).toHaveClass(customClassName);
  });

  // Lưu ý: Các test kiểm tra chi tiết màu sắc nền, màu mũi tên,
  // hoặc việc xoay icon có thể phức tạp hơn và tùy thuộc vào môi trường test
  // và cách bạn xử lý SVG. Các test ở trên tập trung vào tương tác và thuộc tính của button chính.
});
