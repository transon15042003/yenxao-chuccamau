import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import { Quote } from './Quote';

// Mô tả bộ test cho component Quote
describe('Quote', () => {
  it('should render the heading', () => {
    render(
      <Quote
        content="this is my content"
        avatarSrc="/avatars/male.jpg"
        rate={5}
        username="khuongvo"
      />
    );
    // Assert
    expect(screen.getByText('this is my content')).toBeDefined();
  });
});
