import { render, screen } from '@testing-library/react'; // Sử dụng import trực tiếp
import '@testing-library/jest-dom';

import { Certificates } from './Certificates';

describe('Certificates', () => {
  // // Test case 1: Nên render component Certificates và hiển thị nội dung từ các component Certificate con
  // it('should render the Certificates component and display the content of its child Certificates', () => {
  //   // Arrange: Render component Certificates
  //   render(<Certificates />);

  //   // Assert: Kiểm tra sự hiện diện của container chính bằng data-testid
  //   // Đảm bảo bạn đã thêm data-testid="certificates-container" vào div trong Certificates.tsx
  //   const container = screen.getByTestId('certificates-container');
  //   expect(container).toBeInTheDocument();

  //   // Kiểm tra các lớp CSS bố cục chính trên container
  //   expect(container).toHaveClass('flex');
  //   expect(container).toHaveClass('flex-col');
  //   expect(container).toHaveClass('md:flex-row');
  //   // Bạn có thể kiểm tra thêm các lớp khác như justify-center, items-center nếu cần

  //   // Kiểm tra sự hiện diện của nội dung text từ mỗi component Certificate con
  //   // Dựa vào các giá trị được truyền cho prop title và subTitle
  //   // Tiêu đề (titles):
  //   expect(screen.getByText('Chất Lượng')).toBeInTheDocument();
  //   expect(screen.getByText('Vệ Sinh')).toBeInTheDocument();
  //   expect(screen.getByText('Tự Nhiên')).toBeInTheDocument();

  //   // Tiêu đề phụ (subtitles):
  //   expect(
  //     screen.getByText('Sản phẩm được kiểm định chất lượng nghiêm ngặt, đảm bảo an toàn')
  //   ).toBeInTheDocument();
  //   expect(
  //     screen.getByText('Quy trình sản xuất đạt tiêu chuẩn vệ sinh an toàn thực phẩm')
  //   ).toBeInTheDocument();
  //   expect(
  //     screen.getByText('Nguyên liệu tự nhiên, không chất bảo quản, phụ gia độc hại')
  //   ).toBeInTheDocument();

  //   // Kiểm tra sự hiện diện của các ảnh từ mỗi component Certificate con
  //   // Dựa vào alt text mặc định "Certificate image" trong component Certificate.tsx
  //   const certificateImages = screen.getAllByAltText('Certificate'); // Sử dụng getAllByAltText vì có nhiều ảnh

  //   // Kiểm tra xem có đúng 3 ảnh với alt text này được render
  //   expect(certificateImages).toHaveLength(3);
  //   // Kiểm tra mỗi ảnh đều có trong document
  //   certificateImages.forEach((img) => {
  //     expect(img).toBeInTheDocument();
  //   });
  // });

  it('should render the heading', () => {
    render(<Certificates />);
    // Assert
    expect(screen.getByText('Chất Lượng')).toBeDefined();
    expect(screen.getByText('Vệ Sinh')).toBeDefined();
    expect(screen.getByText('Tự Nhiên')).toBeDefined();
  });
});
