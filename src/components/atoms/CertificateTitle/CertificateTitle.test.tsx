import { render, screen } from '@/tests/test-utils';

import '@testing-library/jest-dom';

import { CertificateTitle } from './CertificateTitle'; // Đảm bảo đường dẫn import đúng

describe('CertificateTitle', () => {
  // Test case 1: Nên render nội dung text được truyền qua prop title
  it('should render the title text provided via prop', () => {
    // Arrange: Render component với một title cụ thể
    const testTitle = 'Test Title Text';
    render(<CertificateTitle title={testTitle} />);

    // Assert: Tìm phần tử chứa text đó và kiểm tra nó có trong document
    const titleElement = screen.getByText(testTitle);
    expect(titleElement).toBeInTheDocument();

    // Optional: Kiểm tra xem phần tử đó có phải là thẻ <p> không
    expect(titleElement.tagName).toBe('P');
  });

  // Test case 2: Nên áp dụng class kích thước font mặc định khi không truyền fontSize
  it('should apply the default font size class when fontSize prop is not provided', () => {
    // Arrange: Render component không truyền fontSize (nó sẽ dùng giá trị mặc định 30)
    const testTitle = 'Default Size Title';
    render(<CertificateTitle title={testTitle} />);

    // Assert: Tìm phần tử text và kiểm tra class kích thước font mặc định
    const titleElement = screen.getByText(testTitle);
    expect(titleElement).toBeInTheDocument();
    // Kiểm tra lớp Tailwind cho kích thước font mặc định
    expect(titleElement).toHaveClass('text-[30px]');
  });

  // Test case 3: Nên áp dụng class kích thước font được truyền qua prop fontSize
  it('should apply the specified font size class via fontSize prop', () => {
    // Arrange: Render component và truyền một fontSize cụ thể
    const testTitle = 'Custom Size Title';
    const customFontSize = 45;
    render(<CertificateTitle title={testTitle} fontSize={customFontSize} />);

    // Assert: Tìm phần tử text và kiểm tra class kích thước font tùy chỉnh
    const titleElement = screen.getByText(testTitle);
    expect(titleElement).toBeInTheDocument();
    // Kiểm tra lớp Tailwind cho kích thước font tùy chỉnh
    expect(titleElement).toHaveClass(`text-[${customFontSize}px]`); // Sử dụng template literal để kiểm tra class động
  });

  // Test case 4: Nên áp dụng các lớp CSS cho hiệu ứng gradient text
  it('should apply the necessary classes for the text gradient effect', () => {
    // Arrange: Render component (với bất kỳ title nào)
    render(<CertificateTitle title="Gradient Check" />);

    // Assert: Tìm phần tử text và kiểm tra các lớp gradient/clipping/transparent
    const titleElement = screen.getByText('Gradient Check');
    expect(titleElement).toBeInTheDocument();

    // Kiểm tra các lớp Tailwind cho gradient direction và colors
    expect(titleElement).toHaveClass('bg-gradient-to-b');
    expect(titleElement).toHaveClass('from-[#E6B522]');
    expect(titleElement).toHaveClass('via-[#FFF788]');
    expect(titleElement).toHaveClass('to-[#FFE059]');

    // Kiểm tra các lớp Tailwind cho clipping và transparency
    expect(titleElement).toHaveClass('bg-clip-text');
    expect(titleElement).toHaveClass('text-transparent');

    // Kiểm tra lớp font-bold
    expect(titleElement).toHaveClass('font-bold');
  });
});
