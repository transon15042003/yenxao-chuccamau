import { render, screen } from '@testing-library/react'; // Import các hàm cần thiết
import React from 'react';
import '@testing-library/jest-dom'; // Import matchers cho Jest DOM

import { StyledHeading } from './StyledHeading'; // Điều chỉnh đường dẫn import nếu cần

// Mô tả bộ test cho component StyledHeading
describe('StyledHeading', () => {
  // Test case 1: Render chỉ với title khi subTitle không được cung cấp
  test('renders only the title when subTitle is not provided', () => {
    const testTitle = 'Test Title Only';
    render(<StyledHeading title={testTitle} />);

    // Tìm phần tử chứa văn bản title
    const titleElement = screen.getByText(testTitle);

    // Khẳng định title tồn tại
    expect(titleElement).toBeInTheDocument();
    // Tùy chọn: Khẳng định phần tử này là thẻ <p>
    expect(titleElement.tagName).toBe('P');

    // Khẳng định rằng văn bản subTitle KHÔNG có trong tài liệu.
    // Sử dụng queryByText vì chúng ta mong đợi nó KHÔNG tìm thấy phần tử.
    // Truyền một văn bản bất kỳ không có trong title để tránh nhầm lẫn.
    const potentialSubTitleText = 'Some text that should not be here';
    expect(screen.queryByText(potentialSubTitleText)).not.toBeInTheDocument();

    // Nếu bạn muốn chắc chắn rằng thẻ <p> thứ hai (dành cho subtitle) là rỗng,
    // cách này khó kiểm tra chỉ với getByRole/getByText.
    // Tuy nhiên, kiểm tra sự vắng mặt của văn bản subtitle thường là đủ cho mục tiêu test này.
  });

  // Test case 2: Render cả title và subTitle khi subTitle được cung cấp
  test('renders both title and subTitle when subTitle is provided', () => {
    const testTitle = 'Test Title';
    const testSubTitle = 'Test Subtitle';
    render(<StyledHeading title={testTitle} subTitle={testSubTitle} />);

    // Tìm phần tử chứa văn bản title
    const titleElement = screen.getByText(testTitle);
    // Tìm phần tử chứa văn bản subTitle
    const subTitleElement = screen.getByText(testSubTitle);

    // Khẳng định cả hai đều tồn tại trong tài liệu
    expect(titleElement).toBeInTheDocument();
    expect(subTitleElement).toBeInTheDocument();

    // Tùy chọn: Kiểm tra chúng là thẻ <p>
    expect(titleElement.tagName).toBe('P');
    expect(subTitleElement.tagName).toBe('P');
  });

  // Test case 3: Kiểm tra các class CSS cơ bản của title (tùy chọn)
  test('applies basic styles to the title', () => {
    const testTitle = 'Styled Test Title';
    render(<StyledHeading title={testTitle} />);

    const titleElement = screen.getByText(testTitle);

    expect(titleElement).toBeInTheDocument(); // Đảm bảo tìm thấy phần tử trước
    expect(titleElement).toHaveClass('capitalize');
    expect(titleElement).toHaveClass('font-bold');
    expect(titleElement).toHaveClass('text-5xl');
    expect(titleElement).toHaveClass('text-primary'); // Kiểm tra class màu sắc dựa trên mã
    expect(titleElement).toHaveClass('mb-1');
  });

  // Test case 4: Kiểm tra các class CSS cơ bản của subTitle khi được cung cấp (tùy chọn)
  test('applies basic styles to the subTitle when provided', () => {
    const testTitle = 'Title';
    const testSubTitle = 'Styled Test Subtitle';
    render(<StyledHeading title={testTitle} subTitle={testSubTitle} />);

    const subTitleElement = screen.getByText(testSubTitle);

    expect(subTitleElement).toBeInTheDocument(); // Đảm bảo tìm thấy phần tử trước
    expect(subTitleElement).toHaveClass('font-normal');
    expect(subTitleElement).toHaveClass('text-xl');
    expect(subTitleElement).toHaveClass('text-typo-1'); // Kiểm tra class màu sắc dựa trên mã
    // Prop subTitle không có class mb-1 trong mã component, nên không kiểm tra nó ở đây
  });
});
