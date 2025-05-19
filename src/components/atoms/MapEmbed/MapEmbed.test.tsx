import { render } from '@/tests/test-utils';

import { MapEmbed } from '.';

describe('MapEmbed', () => {
  it('should render the heading', () => {
    render(<MapEmbed embedUrl="maps.google.com" />);
  });
});
