import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'Trang chủ', href: '/' },
      { label: 'Sản phẩm', href: '/products' },
      { label: 'Sản phẩm 1', href: '/products/product-1' }
    ]
  }
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {};
