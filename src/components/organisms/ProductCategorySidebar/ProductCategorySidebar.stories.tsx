import type { Meta, StoryObj } from '@storybook/react';

import { ProductCategorySidebar } from './ProductCategorySidebar';

const meta: Meta<typeof ProductCategorySidebar> = {
  title: 'Organisms/ProductCategorySidebar',
  component: ProductCategorySidebar,
  tags: ['autodocs'],
  args: {
    categories: []
  }
};

export default meta;

type Story = StoryObj<typeof ProductCategorySidebar>;

export const Default: Story = {};
