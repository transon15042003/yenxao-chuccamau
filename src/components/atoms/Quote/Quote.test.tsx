// src/components/atoms/Quote/Quote.test.tsx (Ví dụ về đường dẫn)
import { render, screen } from '@testing-library/react'; // Import các hàm cần thiết
import React from 'react';
import '@testing-library/jest-dom'; // Import matchers cho Jest DOM

// --- Mock next/image cho môi trường test ---
// Điều này giúp các test không bị lỗi khi gặp component next/image
// Nếu bạn đã có setup test toàn cục mock next/image, bạn có thể bỏ qua đoạn này.
jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // Render một thẻ img đơn giản với các prop cần thiết cho test
    // Thêm data-testid hoặc sử dụng alt text để dễ dàng tìm kiếm trong test
    return <img {...props} data-testid={`mock-img-${props.alt}`} />;
  }
}));
// ---------------------------------------------

import { Quote } from './Quote'; // Điều chỉnh đường dẫn import nếu cần

// Mô tả bộ test cho component Quote
describe('Quote', () => {
  const defaultProps = {
    content: 'This is a test quote content.',
    avatarSrc: '/test-avatar.png',
    username: 'Tester',
    rate: 4
  };

  // Test case 1: Render component với props đầy đủ
  test('renders quote content, avatar, and username', () => {
    render(<Quote {...defaultProps} />);

    // Tìm và kiểm tra nội dung quote
    expect(screen.getByText(defaultProps.content)).toBeInTheDocument();

    // Tìm và kiểm tra tên người dùng
    expect(screen.getByText(defaultProps.username)).toBeInTheDocument();

    // Tìm và kiểm tra ảnh avatar bằng alt text
    const avatarImage = screen.getByAltText('avatar'); // Alt text của thẻ img
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', defaultProps.avatarSrc); // Kiểm tra đường dẫn src
  });

  // Test case 2: Render đúng số lượng icon sao dựa trên rate
  test('renders the correct number of stars based on the rate prop', () => {
    const rate = 3;
    render(<Quote {...defaultProps} rate={rate} />);

    // Tìm tất cả các icon sao bằng alt text (nhờ vào cách renderRatingStars tạo alt text)
    const starIcons = screen.getAllByAltText(/^star-/); // Sử dụng regex để tìm alt text bắt đầu bằng "star-"

    // Khẳng định số lượng icon sao đúng bằng giá trị rate
    expect(starIcons).toHaveLength(rate);

    // Kiểm tra alt text của từng sao (tùy chọn, nhưng tốt cho chi tiết)
    expect(screen.getByAltText('star-1')).toBeInTheDocument();
    expect(screen.getByAltText('star-2')).toBeInTheDocument();
    expect(screen.getByAltText('star-3')).toBeInTheDocument();
    expect(screen.queryByAltText('star-4')).not.toBeInTheDocument(); // Đảm bảo không có sao thứ 4
  });

  // Test case 3: Render 0 sao khi rate là 0
  test('renders 0 stars when the rate is 0', () => {
    render(<Quote {...defaultProps} rate={0} />);

    // Kiểm tra không có icon sao nào được render
    const starIcons = screen.queryAllByAltText(/^star-/);
    expect(starIcons).toHaveLength(0);
  });

  // Test case 4: Render 5 sao khi rate là 5 (giá trị max phổ biến)
  test('renders 5 stars when the rate is 5', () => {
    render(<Quote {...defaultProps} rate={5} />);

    const starIcons = screen.getAllByAltText(/^star-/);
    expect(starIcons).toHaveLength(5);
  });

  // Test case 5: Kiểm tra văn bản nội dung dài (tùy chọn)
  test('renders long quote content correctly', () => {
    const longContent =
      'This is a very long quote content that should ideally wrap around within its container. Testing with long text ensures the layout handles different content lengths gracefully without overflow issues.';
    render(<Quote {...defaultProps} content={longContent} />);

    expect(screen.getByText(longContent)).toBeInTheDocument();
    // Kiểm tra xem nó có class căn giữa văn bản không (nếu quan trọng)
    expect(screen.getByText(longContent)).toHaveClass('text-center');
  });
});
