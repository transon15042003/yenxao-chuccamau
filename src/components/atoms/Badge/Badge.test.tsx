import { render, screen } from '@/tests/test-utils';

import { Badge } from '.';

describe('Badge', () => {
  it('should render the heading', () => {
    render(<Badge content="new" />);
    // Assert
    expect(screen.getByText('new')).toBeDefined();
  });
});
