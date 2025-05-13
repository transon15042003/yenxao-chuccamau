import { render, screen } from '@/tests/test-utils';

import { Pagination } from '.';

describe('Pagination', () => {
  it('should render the heading', () => {
    render(<Pagination />);

    // Assert
    screen.getByRole('heading', { name: /Pagination/i });
  });
});
