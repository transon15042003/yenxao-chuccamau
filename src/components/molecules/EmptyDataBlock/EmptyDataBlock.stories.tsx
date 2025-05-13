import type { Meta, StoryObj } from '@storybook/react';

import { EmptyDataBlock } from './EmptyDataBlock';

const meta: Meta<typeof EmptyDataBlock> = {
  title: 'Molecules/EmptyDataBlock',
  component: EmptyDataBlock,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof EmptyDataBlock>;

export const Default: Story = {};
