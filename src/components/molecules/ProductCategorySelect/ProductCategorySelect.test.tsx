import { render, screen } from '@/tests/test-utils';

import { ProductCategorySelect } from '.';

describe('ProductCategorySelect', () => {
  it('should render the select', () => {
    render(<ProductCategorySelect options={[]} value="" />);

    // Assert
    expect(screen.getByText('Danh mục sản phẩm')).toBeInTheDocument();
  });
});
