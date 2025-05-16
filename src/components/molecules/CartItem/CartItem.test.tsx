import { render, screen } from '@/tests/test-utils';

import { CartItem } from '.';

describe('CartItem', () => {
  it('should render the title', () => {
    render(
      <CartItem
        image={`/images/placeholder.png`}
        name="Product Name"
        oldPrice="100"
        price="80"
        quantity={1}
        onIncrease={() => {}}
        onDecrease={() => {}}
        onRemove={() => {}}
      />
    );

    // Assert
    screen.getByText('Product Name');
  });
});
