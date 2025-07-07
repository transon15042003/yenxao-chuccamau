import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Molecules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    pageCount: 10,
    forcePage: 0
  }
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};
