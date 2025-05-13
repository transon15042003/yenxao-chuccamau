import { render, screen } from '@/tests/test-utils';

import { QuoteSection } from '.';

describe('QuoteSection', () => {
  it('should render the heading', () => {
    render(<QuoteSection />);

    // Assert
    screen.getByText('Khách Hàng Nói Gì Về Chúng Tôi');
  });
});
