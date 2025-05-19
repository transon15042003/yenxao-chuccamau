import { render } from '@/tests/test-utils';

import { ContactItem } from '.';

describe('ContactItem', () => {
  it('should render the heading', () => {
    render(<ContactItem icon={'<ClockSVG/>'} label="Clock" details={[]} />);
  });
});
