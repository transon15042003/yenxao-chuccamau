import { render, screen } from '@/tests/test-utils';

import '@testing-library/jest-dom';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  // Test case 1: Kiểm tra placeholder khi prop placeholder được truyền vào
  it('should render the input with the custom placeholder', () => {
    // Arrange: Render component SearchBar với một placeholder tùy chỉnh
    const customPlaceholderText = 'Tìm kiếm sản phẩm';
    render(<SearchBar placeholder={customPlaceholderText} />);

    // Assert: Tìm phần tử input dựa trên placeholder text
    const searchInput = screen.getByPlaceholderText(customPlaceholderText);

    // Xác nhận rằng input được tìm thấy và có trong document
    expect(searchInput).toBeInTheDocument();

    // Bạn có thể thêm các xác nhận khác nếu cần, ví dụ:
    expect(searchInput).toHaveAttribute('type', 'search');
    // expect(searchInput).toHaveClass('border-0'); // Kiểm tra class Tailwind (tùy chọn)
  });

  // Test case 2: Kiểm tra placeholder mặc định khi prop placeholder không được truyền vào
  it('should render the input with the default placeholder when prop is not provided', () => {
    // Arrange: Render component SearchBar mà không truyền prop placeholder
    render(<SearchBar />);

    // Assert: Tìm phần tử input dựa trên placeholder text mặc định
    const defaultPlaceholderText = 'Tìm kiếm'; // Giá trị mặc định trong component SearchBar.tsx
    const searchInput = screen.getByPlaceholderText(defaultPlaceholderText);

    // Xác nhận rằng input với placeholder mặc định tồn tại
    expect(searchInput).toBeInTheDocument();
  });

  // Test case 3: Kiểm tra button tìm kiếm có được render hay không
  it('should render the search button', () => {
    // Arrange: Render component SearchBar
    render(<SearchBar />);

    // Assert: Tìm phần tử button bằng role 'button'
    // getByRole là cách ưu tiên để tìm kiếm các phần tử tương tác
    const searchButton = screen.getByRole('button');

    // Xác nhận rằng button được tìm thấy và có trong document
    expect(searchButton).toBeInTheDocument();

    // Bạn có thể thêm xác nhận về type của button nếu cần
    expect(searchButton).toHaveAttribute('type', 'submit');
  });

  // Bạn có thể thêm các test khác nếu component có thêm logic (ví dụ: xử lý sự kiện input, submit form)
});
