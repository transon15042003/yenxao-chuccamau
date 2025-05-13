import { render, screen } from '@/tests/test-utils';

import { ProductSection } from '.';

describe('ProductSection', () => {
  // Test case 1: Render component mà không bị lỗi
  test('renders without crashing', () => {
    render(<ProductSection />);
    // Test này chỉ kiểm tra xem lệnh render có chạy thành công không
    expect(true).toBe(true);
  });

  // Test case 2: Render tiêu đề chính "Sản phẩm nổi bật"
  test('renders the main title "Sản phẩm nổi bật"', () => {
    render(<ProductSection />);

    // Tìm kiếm phần tử chứa văn bản "Sản phẩm nổi bật"
    const titleElement = screen.getByText('Sản phẩm nổi bật');

    // Khẳng định phần tử đó tồn tại trong tài liệu
    expect(titleElement).toBeInTheDocument();
    // Có thể kiểm tra thêm về ngữ nghĩa nếu cần, ví dụ nó là một thẻ p, h1, v.v.
    expect(titleElement.tagName).toBe('P'); // Kiểm tra xem nó có phải thẻ p không
  });
});
