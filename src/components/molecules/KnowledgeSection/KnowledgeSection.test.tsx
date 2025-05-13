// KnowledgeSection.test.tsx
import { render, screen } from '@/tests/test-utils'; // Giả định đường dẫn import testing utility của bạn

import { KnowledgeSection } from './KnowledgeSection'; // Import component cần test

describe('KnowledgeSection', () => {
  // Test case 1: Kiểm tra xem tiêu đề chính "Tin Tức & Hướng Dẫn" có được hiển thị không
  test('renders the main title "Tin Tức & Hướng Dẫn"', () => {
    render(<KnowledgeSection />); // Render component KnowledgeSection

    // Tìm kiếm phần tử chứa văn bản "Tin Tức & Hướng Dẫn"
    // Sử dụng getByText vì chúng ta mong đợi văn bản này xuất hiện
    const mainTitleElement = screen.getByText('Tin Tức & Hướng Dẫn');

    // Khẳng định rằng phần tử này có trong tài liệu (DOM ảo)
    expect(mainTitleElement).toBeInTheDocument();
  });

  // Test case 2: Kiểm tra xem tiêu đề phụ "Chia sẻ kiến thức..." có được hiển thị không
  test('renders the subtitle "Chia sẻ kiến thức và bí quyết sử dụng Yến hiệu quả mỗi ngày."', () => {
    render(<KnowledgeSection />);

    // Tìm kiếm phần tử chứa văn bản tiêu đề phụ
    const subTitleElement = screen.getByText(
      'Chia sẻ kiến thức và bí quyết sử dụng Yến hiệu quả mỗi ngày.'
    );

    // Khẳng định rằng phần tử này có trong tài liệu
    expect(subTitleElement).toBeInTheDocument();
  });

  // Test case 3: Kiểm tra xem tiêu đề "KnowledgeSection" (từ h1) có được hiển thị không
  test('renders the "KnowledgeSection" heading', () => {
    render(<KnowledgeSection />);

    // Tìm kiếm phần tử h1 chứa văn bản "KnowledgeSection"
    const sectionHeadingElement = screen.getByText('KnowledgeSection');

    // Khẳng định rằng phần tử này có trong tài liệu
    expect(sectionHeadingElement).toBeInTheDocument();
  });

  // Test case 4: Kiểm tra xem nút "Xem tất cả sản phẩm" có được hiển thị không
  test('renders the "Xem tất cả sản phẩm" button', () => {
    render(<KnowledgeSection />);

    // Tìm kiếm phần tử button chứa văn bản "Xem tất cả sản phẩm"
    const buttonElement = screen.getByRole('button', { name: 'Xem tất cả sản phẩm' });

    // Khẳng định rằng phần tử này có trong tài liệu
    expect(buttonElement).toBeInTheDocument();
  });

  // Test case 5: Kiểm tra xem ít nhất một component New được render không (kiểm tra bằng văn bản tiêu đề New)
  test('renders at least one New component', () => {
    render(<KnowledgeSection />);

    // Tìm kiếm bất kỳ phần tử nào chứa văn bản tiêu đề của component New
    // Sử dụng getAllByText vì có nhiều component New giống nhau
    const newTitleElements = screen.getAllByText(
      'Yến thô để được bao lâu? Cách bảo quản tổ yến thô đơn giản...'
    );

    // Khẳng định rằng có ít nhất một phần tử được tìm thấy
    expect(newTitleElements.length).toBeGreaterThan(0);
  });
});
