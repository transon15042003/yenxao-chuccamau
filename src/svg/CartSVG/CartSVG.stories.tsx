import { StoryObj } from '@storybook/react';

import { CartSVG } from './CartSVG';

export default {
  title: 'icons/CartSVG',
  component: CartSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof CartSVG>;

export const Default: Story = {};
