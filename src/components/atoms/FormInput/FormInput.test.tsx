import { render, screen } from '@/tests/test-utils';

import { FormInput } from '.';

describe('FormInput', () => {
  it('should render the heading', () => {
    const text = 'This is my placeholder';
    render(<FormInput type="text" placeholder={text} />);

    screen.getByPlaceholderText(text);
  });
});
