import { render, screen } from '@/tests/test-utils';

import { ProductCard } from '.';

describe('ProductCard', () => {
  it('should render the product name', () => {
    render(<ProductCard image="/images/placeholder.png" name="Bánh tổ yến" price="10000000" />);

    // Assert
    screen.getByText(/Bánh tổ yến/i);
  });

  it('should render the product price', () => {
    render(<ProductCard image="/images/placeholder.png" name="Bánh tổ yến" price="10000000" />);

    screen.getByText(/10000000/i);
  });
});
