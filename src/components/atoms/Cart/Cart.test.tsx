import { render, screen } from '@/tests/test-utils';

import { Cart } from '.';

describe('Cart', () => {
  it('should render the heading', () => {
    render(<Cart />);

    // Assert
    screen.getByRole('heading', { name: /Cart/i });
  });
});
