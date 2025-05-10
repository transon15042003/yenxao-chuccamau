import type { Meta, StoryObj } from '@storybook/react';

import { Cart } from './Cart';

const meta: Meta<typeof Cart> = {
  title: 'Atoms/Cart',
  component: Cart,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof Cart>;

export const Default: Story = {};
