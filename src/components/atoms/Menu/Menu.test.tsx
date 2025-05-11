import { render, screen } from '@/tests/test-utils';

import '@testing-library/jest-dom';
import { Menu } from './Menu';

describe('Menu', () => {
  // Test case 1: Component nên được render thành một button với type="button"
  it('should render the Menu component as a button with type="button"', () => {
    // Arrange: Render component
    render(<Menu />);

    // Assert: Tìm phần tử button bằng vai trò 'button'
    const menuButton = screen.getByRole('button');

    // Xác nhận button có trong document và có type="button"
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('type', 'button');
  });

  // Test case 2: Nên hiển thị icon menu với alt text và kích thước mặc định
  it('should render the menu icon with default size and alt text', () => {
    // Arrange: Render component không truyền size
    render(<Menu />);

    // Assert: Tìm phần tử ảnh (icon) bằng vai trò 'img' và alt text 'Menu'
    const menuIcon = screen.getByRole('img', { name: 'Menu' });

    // Xác nhận icon có trong document
    expect(menuIcon).toBeInTheDocument();

    // Kiểm tra kích thước mặc định (42x42) được gán cho thuộc tính width và height của thẻ <img>
    expect(menuIcon).toHaveAttribute('width', '32');
    expect(menuIcon).toHaveAttribute('height', '32');
  });

  // Test case 3: Nên hiển thị icon menu với kích thước được chỉ định
  it('should render the menu icon with specified size', () => {
    // Arrange: Render component và truyền prop size
    const customSize = 36;
    render(<Menu size={customSize} />);

    // Assert: Tìm icon và kiểm tra kích thước được áp dụng
    const menuIcon = screen.getByRole('img', { name: 'Menu' });

    expect(menuIcon).toBeInTheDocument();
    // Kiểm tra thuộc tính width và height có giá trị bằng customSize (dưới dạng string)
    expect(menuIcon).toHaveAttribute('width', customSize.toString());
    expect(menuIcon).toHaveAttribute('height', customSize.toString());
  });

  // Test case 4: Nên áp dụng class tùy chỉnh được truyền qua prop className cho button
  it('should apply the provided className to the button', () => {
    // Arrange: Render component và truyền prop className
    const customClass = 'bg-red-500 hover:bg-red-700';
    render(<Menu className={customClass} />);

    // Assert: Tìm phần tử button và kiểm tra xem nó có class tùy chỉnh đó không
    const menuButton = screen.getByRole('button');

    // toHaveClass kiểm tra xem phần tử có chứa class được chỉ định không
    expect(menuButton).toHaveClass(customClass);
    // Bạn có thể kiểm tra nhiều class hoặc từng class riêng lẻ
    expect(menuButton).toHaveClass('bg-red-500');
    expect(menuButton).toHaveClass('hover:bg-red-700');
  });
});
