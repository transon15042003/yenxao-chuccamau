import type { Meta, StoryObj } from '@storybook/react';

import { Cart } from './Cart';

const meta: Meta<typeof Cart> = {
  title: 'Atoms/Cart',
  component: Cart,
  tags: ['autodocs'],
  args: {
    count: 0,
    size: 24
  }
};

export default meta;

type Story = StoryObj<typeof Cart>;

// Ví dụ về một story khác nếu bạn muốn hiển thị giỏ hàng với số lượng khác
export const ItemsInCart: Story = {
  args: {
    count: 3 // Story này hiển thị count là 3
  }
};

export const Default: Story = {};
