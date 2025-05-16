import { render, screen } from '@/tests/test-utils';

import { InputGroup } from '.';

describe('InputGroup', () => {
  it('should render the label', () => {
    render(<InputGroup label="Test Input Label" />);

    // Assert
    screen.getByText('Test Input Label');
  });

  it('should render the input', () => {
    render(<InputGroup label="Test Input Label" />);

    // Assert
    screen.getByRole('textbox');
  });

  it('should render the error message', () => {
    render(<InputGroup label="Test Input Label" errorMessage="Test Error Message" />);

    // Assert
    screen.getByText('Test Error Message');
  });

  it('should render the required asterisk', () => {
    render(<InputGroup label="Test Input Label" required />);

    // Assert
    screen.getByText('*');
  });
});
