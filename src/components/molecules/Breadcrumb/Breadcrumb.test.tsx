import { render, screen } from '@/tests/test-utils';

import { Breadcrumb } from '.';

describe('Breadcrumb', () => {
  it('should render the heading', () => {
    render(<Breadcrumb />);

    // Assert
    screen.getByRole('heading', { name: /Breadcrumb/i });
  });
});
