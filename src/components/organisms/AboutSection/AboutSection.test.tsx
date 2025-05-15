// AboutSection.test.tsx
import { screen } from '@/tests/test-utils'; // Import testing utility của bạn
import { render } from '@testing-library/react';
import React from 'react'; // Import React vì cần thiết khi sử dụng JSX

import { AboutSection } from './AboutSection';

// --- Mock các component con ---
// Mock Intro component
// Trả về một div đơn giản với test ID để dễ dàng kiểm tra trong test
jest.mock('@/components/organisms/Home/Intro/Intro', () => ({
  __esModule: true,
  default: () => <div data-testid="mock-intro">Mock Intro Component</div>
}));

// Mock Certificates component
// Trả về một div đơn giản với test ID để dễ dàng kiểm tra trong test
jest.mock('../Certificates', () => ({
  __esModule: true,
  Certificates: () => <div data-testid="mock-certificates">Mock Certificates Component</div>
}));
// --- Kết thúc Mock ---

describe('AboutSection', () => {
  // Bài kiểm tra cơ bản nhất: Component được render mà không lỗi và chứa các component con
  test('renders AboutSection and includes its child components', () => {
    // Render component AboutSection
    render(<AboutSection />);

    // *** Lưu ý: Component AboutSection trong mã bạn cung cấp không có data-testid="about-section-container".
    // Nếu bạn muốn kiểm tra sự tồn tại của container chính, bạn cần thêm data-testid="about-section-container"
    // vào thẻ div ngoài cùng của AboutSection.
    // Nếu không, bạn có thể bỏ dòng kiểm tra container chính và chỉ kiểm tra các component con.
    // Dưới đây tôi sẽ chỉ kiểm tra sự tồn tại của các mock component con, điều này cũng ngầm xác nhận AboutSection đã render thành công.

    // Kiểm tra xem component Intro (đã mock) có được render không
    const mockIntroElement = screen.getByTestId('mock-intro');
    expect(mockIntroElement).toBeInTheDocument();

    // Kiểm tra xem component Certificates (đã mock) có được render không
    const mockCertificatesElement = screen.getByTestId('mock-certificates');
    expect(mockCertificatesElement).toBeInTheDocument();

    // Có thể thêm kiểm tra cho phần tử nền nếu nó có test ID hoặc text cố định
    // Ví dụ: screen.getByRole('img', { name: 'Background image' }) nếu ảnh nền là thẻ img
    // Nhưng với ảnh nền CSS, việc kiểm tra trực tiếp bằng Testing Library sẽ phức tạp hơn,
    // nên với test cơ bản, chúng ta bỏ qua.
  });

  // Không thêm các bài kiểm tra phức tạp khác theo yêu cầu "chỉ cần trường hợp cơ bản nhất".
});

// *** Gợi ý: Thêm data-testid vào div ngoài cùng của AboutSection nếu bạn muốn kiểm tra sự tồn tại của nó một cách rõ ràng trong test.
// <div data-testid="about-section-container" className="w-full h-auto md:h-[917px] flex flex-col items-center justify-around py-[70px] relative overflow-hidden">
