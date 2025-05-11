// src/components/atoms/Panel/Panel.test.tsx

// Import các hàm cần thiết từ React Testing Library
// Sử dụng '@/tests/test-utils' nếu dự án của bạn có cấu hình alias này
import { render, screen } from '@/tests/test-utils';

// Import các matcher mở rộng từ jest-dom
import '@testing-library/jest-dom';

// Import component Panel cần test
import { Panel } from './Panel'; // Đảm bảo đường dẫn import đúng

// describe: Gom nhóm các bài test cho component Panel
describe('Panel', () => {
  // Test case 1: Component nên được render thành công và chứa thẻ Image
  it('should render the Panel component and contain the Image', () => {
    // Arrange: Render component Panel
    render(<Panel />);

    // Assert: Tìm phần tử ảnh (Image) bằng alt text của nó
    const panelImage = screen.getByAltText('Panel background image');

    // Xác nhận ảnh có trong document
    expect(panelImage).toBeInTheDocument();

    // Optional: Bạn có thể kiểm tra xem ảnh có nằm trong một thẻ div hay không
    // expect(panelImage.parentElement).toBeInstanceOf(HTMLDivElement);
  });

  // Test case 2: Nên sử dụng đường dẫn ảnh và alt text mặc định khi không truyền prop imageSrc
  it('should use default image source and alt text when imageSrc prop is not provided', () => {
    // Arrange: Render component không truyền imageSrc
    render(<Panel />);

    // Assert: Tìm ảnh bằng alt text và kiểm tra thuộc tính src
    const panelImage = screen.getByAltText('Panel background image');
    expect(panelImage).toBeInTheDocument(); // Xác nhận lại
    expect(panelImage).toHaveAttribute('src', '/img_panel.svg'); // Kiểm tra đường dẫn src mặc định
    // Alt text 'Panel background image' đã được kiểm tra bởi getByAltText
  });

  // Test case 3: Nên sử dụng đường dẫn ảnh được truyền qua prop imageSrc
  it('should use the provided image source when imageSrc prop is given', () => {
    // Arrange: Render component và truyền một đường dẫn ảnh tùy chỉnh
    const customSrc = '/img_panel.svg';
    render(<Panel imageSrc={customSrc} />);

    // Assert: Tìm ảnh và kiểm tra thuộc tính src
    const panelImage = screen.getByAltText('Panel background image');
    expect(panelImage).toBeInTheDocument(); // Xác nhận lại
    expect(panelImage).toHaveAttribute('src', customSrc); // Kiểm tra đường dẫn src tùy chỉnh
  });

  // Test case 4: Nên áp dụng thuộc tính width và height mặc định cho thẻ Image
  it('should apply default intrinsic width and height attributes to the Image', () => {
    // Arrange: Render component không truyền width và height
    render(<Panel />);

    // Assert: Tìm ảnh và kiểm tra thuộc tính width, height
    const panelImage = screen.getByAltText('Panel background image');
    expect(panelImage).toBeInTheDocument(); // Xác nhận lại
    expect(panelImage).toHaveAttribute('width', '1440'); // Kiểm tra width mặc định
    expect(panelImage).toHaveAttribute('height', '583'); // Kiểm tra height mặc định
  });

  // Test case 5: Nên áp dụng thuộc tính width và height được truyền qua props cho thẻ Image
  it('should apply provided intrinsic width and height attributes to the Image', () => {
    // Arrange: Render component và truyền width, height tùy chỉnh
    const customWidth = 800;
    const customHeight = 600;
    render(<Panel width={customWidth} height={customHeight} />);

    // Assert: Tìm ảnh và kiểm tra thuộc tính width, height
    const panelImage = screen.getByAltText('Panel background image');
    expect(panelImage).toBeInTheDocument(); // Xác nhận lại
    expect(panelImage).toHaveAttribute('width', customWidth.toString()); // Kiểm tra width tùy chỉnh (dưới dạng string)
    expect(panelImage).toHaveAttribute('height', customHeight.toString()); // Kiểm tra height tùy chỉnh (dưới dạng string)
  });

  // Test case 6: Nên áp dụng width mặc định và height tùy chỉnh khi chỉ truyền height
  it('should apply default intrinsic width and provided height when only height is given', () => {
    const customHeight = 600;
    render(<Panel height={customHeight} />);

    const panelImage = screen.getByAltText('Panel background image');
    expect(panelImage).toBeInTheDocument();
    expect(panelImage).toHaveAttribute('width', '1440'); // Width mặc định được sử dụng
    expect(panelImage).toHaveAttribute('height', customHeight.toString()); // Height tùy chỉnh được sử dụng
  });

  // Test case 7: Nên áp dụng width tùy chỉnh và height mặc định khi chỉ truyền width
  it('should apply provided intrinsic width and default height when only width is given', () => {
    const customWidth = 800;
    render(<Panel width={customWidth} />);

    const panelImage = screen.getByAltText('Panel background image');
    expect(panelImage).toBeInTheDocument();
    expect(panelImage).toHaveAttribute('width', customWidth.toString()); // Width tùy chỉnh được sử dụng
    expect(panelImage).toHaveAttribute('height', '583'); // Height mặc định được sử dụng
  });

  // Test case 8: Nên áp dụng các lớp CSS responsive và object-fit cho thẻ Image
  it('should apply responsive object-fit classes to the Image', () => {
    // Arrange: Render component
    render(<Panel />);

    // Assert: Tìm ảnh và kiểm tra các lớp CSS
    const panelImage = screen.getByAltText('Panel background image');
    expect(panelImage).toBeInTheDocument(); // Xác nhận lại

    // Kiểm tra các lớp object-fit của Tailwind có được áp dụng không
    expect(panelImage).toHaveClass('object-cover');
    expect(panelImage).toHaveClass('md:object-none');
    // Lưu ý: Kiểm tra class có tồn tại không dễ hơn là kiểm tra hành vi responsive thực tế trong JSDOM
  });

  // Test case 9: Nên áp dụng các lớp CSS từ prop className cho div bao ngoài
  it('should apply the provided className to the outer container div', () => {
    const customClass = 'mt-8 mb-4';
    render(<Panel className={customClass} />);

    // Tìm div bao ngoài trực tiếp bằng data-testid
    const outerDiv = screen.getByTestId('panel-container');

    // Xác nhận div bao ngoài tồn tại
    expect(outerDiv).toBeInTheDocument();

    // Kiểm tra các lớp tùy chỉnh và lớp mặc định trên div bao ngoài
    expect(outerDiv).toHaveClass(customClass);
    expect(outerDiv).toHaveClass('relative', 'w-full', 'h-48', 'md:h-auto', 'overflow-hidden');
  });
});
