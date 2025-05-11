import { render, screen } from '@/tests/test-utils';

import '@testing-library/jest-dom';
import { Cart } from './Cart';

describe('Cart', () => {
  // Test case 1: Component nên được render thành công
  it('should render the Cart component', () => {
    // Arrange: Render component với props cơ bản
    render(<Cart />);

    // Assert: Kiểm tra xem có phần tử nào đó của component tồn tại không, ví dụ nút button
    const cartButton = screen.getByRole('button');
    expect(cartButton).toBeInTheDocument();
  });

  // Test case 2: Nên hiển thị icon giỏ hàng với alt text và kích thước mặc định
  it('should render the shopping cart icon with default size and alt text', () => {
    // Arrange: Render component không truyền size
    render(<Cart />);

    // Assert: Tìm phần tử ảnh (icon) bằng vai trò 'img' và alt text
    const cartIcon = screen.getByRole('img', { name: 'Shopping cart icon' });

    // Xác nhận icon có trong document
    expect(cartIcon).toBeInTheDocument();

    // Kiểm tra kích thước mặc định (24x24) được gán cho thuộc tính width và height của thẻ <img>
    // Lưu ý: React Testing Library kiểm tra các thuộc tính DOM cuối cùng
    expect(cartIcon).toHaveAttribute('width', '24');
    expect(cartIcon).toHaveAttribute('height', '24');
  });

  // Test case 3: Nên hiển thị icon giỏ hàng với kích thước được chỉ định
  it('should render the shopping cart icon with specified size', () => {
    // Arrange: Render component và truyền prop size
    const customSize = 40;
    render(<Cart size={customSize} />);

    // Assert: Tìm icon và kiểm tra kích thước được áp dụng
    const cartIcon = screen.getByRole('img', { name: 'Shopping cart icon' });

    expect(cartIcon).toBeInTheDocument();
    // Kiểm tra thuộc tính width và height có giá trị bằng customSize (dưới dạng string)
    expect(cartIcon).toHaveAttribute('width', customSize.toString());
    expect(cartIcon).toHaveAttribute('height', customSize.toString());
  });

  // Test case 4: Nên hiển thị badge với số lượng mặc định là 0 khi không truyền prop count
  it('should render the badge with default count 0', () => {
    // Arrange: Render component không truyền count
    render(<Cart />);

    // Assert: Tìm phần tử (div) chứa text '0' (số lượng mặc định)
    // getByText có thể tìm một phần tử chỉ chứa nội dung text đó
    const countBadge = screen.getByText('0');

    // Xác nhận badge tồn tại
    expect(countBadge).toBeInTheDocument();
  });

  // Test case 5: Nên hiển thị badge với số lượng được chỉ định khi truyền prop count
  it('should render the badge with the specified count', () => {
    // Arrange: Render component và truyền prop count
    const itemCount = 7;
    render(<Cart count={itemCount} />);

    // Assert: Tìm phần tử chứa text bằng giá trị của itemCount (chuyển sang string)
    const countBadge = screen.getByText(itemCount.toString());

    // Xác nhận badge với số lượng đúng tồn tại
    expect(countBadge).toBeInTheDocument();
  });

  // Test case 6: Nên render nút button bao quanh nội dung giỏ hàng
  it('should render a button wrapping the cart content', () => {
    // Arrange: Render component
    render(<Cart />);
    // Assert: Tìm phần tử button bằng vai trò 'button'
    const cartButton = screen.getByRole('button');
    expect(cartButton).toBeInTheDocument();
    expect(cartButton).toHaveAttribute('type', 'button'); // Kiểm tra loại button
  });
});
