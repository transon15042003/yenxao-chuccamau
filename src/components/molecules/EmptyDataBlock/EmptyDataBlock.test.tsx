import { render, screen } from '@/tests/test-utils';

import { EmptyDataBlock } from '.';

describe('EmptyDataBlock', () => {
  it('should render the image', () => {
    render(<EmptyDataBlock />);

    // Assert
    screen.getByRole('img', { name: 'empty-data' });
  });
});
