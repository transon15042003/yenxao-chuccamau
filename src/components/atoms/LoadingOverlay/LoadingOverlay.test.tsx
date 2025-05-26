import { render } from '@/tests/test-utils';

import { LoadingOverlay } from '.';

describe('LoadingOverlay', () => {
  it('should render the heading', () => {
    render(<LoadingOverlay />);
  });
});
