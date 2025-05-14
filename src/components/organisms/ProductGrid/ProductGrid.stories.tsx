import type { Meta, StoryObj } from '@storybook/react';

import { ProductGrid } from './ProductGrid';

const meta: Meta<typeof ProductGrid> = {
  title: 'Organisms/ProductGrid',
  component: ProductGrid,
  tags: ['autodocs'],
  args: {
    products: []
  }
};

export default meta;

type Story = StoryObj<typeof ProductGrid>;

export const Default: Story = {};
