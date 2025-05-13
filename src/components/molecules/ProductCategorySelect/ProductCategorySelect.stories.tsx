import type { Meta, StoryObj } from '@storybook/react';

import { ProductCategorySelect } from './ProductCategorySelect';

const meta: Meta<typeof ProductCategorySelect> = {
  title: 'Molecules/ProductCategorySelect',
  component: ProductCategorySelect,
  tags: ['autodocs'],
  args: {
    options: [
      { label: 'Tất cả', value: 'all' },
      { label: 'Yến Chưng Tươi', value: 'yen-chung-tuoi' },
      { label: 'Yến Sợi Non Chưng Tươi', value: 'yen-soi-non-chung-tuoi' }
    ],
    value: 'all'
  }
};

export default meta;

type Story = StoryObj<typeof ProductCategorySelect>;

export const Default: Story = {};
