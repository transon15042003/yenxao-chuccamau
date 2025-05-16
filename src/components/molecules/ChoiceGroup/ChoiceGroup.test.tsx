import { render, screen } from '@/tests/test-utils';

import { ChoiceGroup } from '.';

describe('ChoiceGroup', () => {
  // Test case 1: Render component mà không bị lỗi
  test('renders without crashing', () => {
    render(<ChoiceGroup />);
    expect(true).toBe(true);
  });

  // Test case 2: Render đúng các ChoiceButton với tiêu đề hardcode
  test('renders the correct ChoiceButton titles', () => {
    render(<ChoiceGroup />);

    // Tìm kiếm các button bằng văn bản hiển thị
    const banChayButton = screen.getByText('Bán chạy');
    const moiNhatButton = screen.getByText('Mới nhất');
    const khuyenMaiButton = screen.getByText('Khuyến mãi');
    const comboButton = screen.getByText('Combo');

    // Khẳng định tất cả các button đều tồn tại trong tài liệu
    expect(banChayButton).toBeInTheDocument();
    expect(moiNhatButton).toBeInTheDocument();
    expect(khuyenMaiButton).toBeInTheDocument();
    expect(comboButton).toBeInTheDocument();
  });

  // Test case 3: Button "Bán chạy" được render với trạng thái selected ban đầu
  test('renders the "Bán chạy" button as selected', () => {
    render(<ChoiceGroup />);

    // Tìm kiếm button "Bán chạy" và kiểm tra class selected của nó
    const banChayButtonElement = screen.getByText('Bán chạy').closest('button');

    // Kiểm tra các class liên quan đến trạng thái selected
    expect(banChayButtonElement).toHaveClass('font-bold');
    expect(banChayButtonElement).toHaveClass('bg-gradient-to-b');
  });

  // Test case 4: Button "Mới nhất" không được render với trạng thái selected ban đầu
  test('renders the "Mới nhất" button as not selected', () => {
    render(<ChoiceGroup />);

    const moiNhatButtonElement = screen.getByText('Mới nhất').closest('button');

    // Kiểm tra rằng nó KHÔNG có các class liên quan đến selected
    expect(moiNhatButtonElement).not.toHaveClass('font-bold');
    expect(moiNhatButtonElement).not.toHaveClass('bg-gradient-to-b');
  });
});
