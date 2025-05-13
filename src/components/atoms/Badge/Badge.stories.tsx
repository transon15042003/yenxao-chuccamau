import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    content: 'New'
  }
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    content: 'New'
  }
};
