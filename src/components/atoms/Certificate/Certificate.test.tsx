// src/components/atoms/Certificate/Certificate.test.tsx

// Import các hàm cần thiết từ React Testing Library
// Sử dụng '@/tests/test-utils' nếu dự án của bạn có cấu hình alias này
import { render, screen } from '@/tests/test-utils';

// Import các matcher mở rộng từ jest-dom (để dùng toBeInTheDocument)
import '@testing-library/jest-dom';

// Import component Certificate cần test
import { Certificate } from './Certificate'; // Đảm bảo đường dẫn import đúng

// describe: Gom nhóm các bài test cho component Certificate
describe('Certificate', () => {
  // Định nghĩa một giá trị giả cho prop bắt buộc certificateSrc để dùng trong test
  const requiredCertificateSrc = '/path/to/mock/image.svg'; // Sử dụng một đường dẫn giả

  // Bài kiểm thử cơ bản nhất: Component nên render thành công với prop bắt buộc
  it('should render the Certificate component successfully with the required prop', () => {
    // Arrange: Render component với prop bắt buộc
    render(<Certificate certificateSrc={requiredCertificateSrc} />);

    // Assert: Kiểm tra xem phần tử container chính có tồn tại trong document không.
    // Chúng ta sử dụng data-testid="certificate-container" đã thêm vào div bao ngoài.
    const container = screen.getByTestId('certificate-container');

    // Xác nhận rằng container được tìm thấy và có trong document
    expect(container).toBeInTheDocument();

    // Nếu bạn muốn kiểm tra sự hiện diện của ảnh, có thể thêm:
    // const certImage = screen.getByAltText('Certificate image'); // Sử dụng alt text từ component
    // expect(certImage).toBeInTheDocument();
  });
});
