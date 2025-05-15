import { screen } from '@/tests/test-utils';
import { render } from '@testing-library/react';
import React from 'react';

import { AboutSection } from './AboutSection';

describe('AboutSection', () => {
  it('should render the heading', async () => {
    render(<AboutSection />);

    const aboutSectionBox = await screen.findByTestId('aboutsection-box');

    expect(aboutSectionBox).toBeInTheDocument();
  });
});
