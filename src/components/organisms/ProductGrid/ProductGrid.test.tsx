import { render, screen } from '@/tests/test-utils';

import { ProductGrid } from '.';

describe('ProductGrid', () => {
  it('should render the products', () => {
    render(<ProductGrid products={[]} />);

    // Assert
    expect(screen.getByText('Sản phẩm')).toBeInTheDocument();
  });
});
