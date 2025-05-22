import { render } from '@/tests/test-utils';

import { NewFeed } from '.';

describe('NewFeed', () => {
  it('should render the heading', () => {
    render(<NewFeed />);

    // Assert
    // screen.getByRole('heading', { name: /NewFeed/i });
  });
});
