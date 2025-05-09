import { render, screen } from '@/tests/test-utils';

import { SearchBar } from '.';

describe('SearchBar', () => {
  it('should render the heading', () => {
    render(<SearchBar />);

    // Assert
    screen.getByRole('heading', { name: /SearchBar/i });
  });
});
