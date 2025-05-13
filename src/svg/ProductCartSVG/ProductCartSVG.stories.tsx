import { StoryObj } from '@storybook/react';

import { ProductCartSVG } from './ProductCartSVG';

export default {
  title: 'icons/ProductCartSVG',
  component: ProductCartSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof ProductCartSVG>;

export const Default: Story = {};
