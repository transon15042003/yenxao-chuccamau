import '@testing-library/jest-dom';
import { render, screen } from '@/tests/test-utils';

import { Progress } from '.';

describe('Progress', () => {
  it('should render the label', () => {
    render(<Progress value={30} max={100} label="30%" />);

    // Assert
    expect(screen.getByText('30%')).toBeInTheDocument();
  });
});
