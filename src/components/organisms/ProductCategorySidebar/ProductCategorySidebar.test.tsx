import { render, screen } from '@/tests/test-utils';

import { ProductCategorySidebar } from '.';

describe('ProductCategorySidebar', () => {
  it('should render the heading', () => {
    render(<ProductCategorySidebar categories={[]} />);

    // Assert
    expect(screen.getByText('Danh mục sản phẩm')).toBeInTheDocument();
  });
});
