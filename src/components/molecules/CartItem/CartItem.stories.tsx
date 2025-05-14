import type { Meta, StoryObj } from '@storybook/react';

import { CartItem } from './CartItem';

const meta: Meta<typeof CartItem> = {
  title: 'Molecules/CartItem',
  component: CartItem,
  tags: ['autodocs'],
  args: {
    image: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/images/placeholder.webp`,
    name: 'Product Name',
    oldPrice: '100',
    price: '80',
    quantity: 1,
    onIncrease: () => {},
    onDecrease: () => {},
    onRemove: () => {}
  }
};

export default meta;

type Story = StoryObj<typeof CartItem>;

export const Default: Story = {};
