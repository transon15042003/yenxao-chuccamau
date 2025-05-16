import { render } from '@/tests/test-utils';

import { FormLabel } from '.';

describe('FormLabel', () => {
  it('should render the heading', () => {
    const text = 'This is label';
    render(<FormLabel label={text} />);
  });
});
