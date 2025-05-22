import { render } from '@/tests/test-utils';

import { TextStack } from '.';

describe('TextStack', () => {
  it('should render the heading', () => {
    render(<TextStack label="Hotline: 0901 234 567" />);
  });
});
