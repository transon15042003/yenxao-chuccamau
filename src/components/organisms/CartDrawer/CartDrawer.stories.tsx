import type { Meta, StoryObj } from '@storybook/react';

import { CartDrawer } from './CartDrawer';

const meta: Meta<typeof CartDrawer> = {
  title: 'Organisms/CartDrawer',
  component: CartDrawer,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof CartDrawer>;

export const Default: Story = {};
