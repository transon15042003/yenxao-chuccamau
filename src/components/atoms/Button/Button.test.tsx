import { render, screen } from '@/tests/test-utils';

import { Button } from '.';

describe('Button', () => {
  it('should render the heading', () => {
    render(<Button>Button</Button>);

    // Assert
    screen.getByRole('button', { name: /Button/i });
  });
});
