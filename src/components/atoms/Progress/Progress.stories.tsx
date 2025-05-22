import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Atoms/Progress',
  component: Progress,
  tags: ['autodocs'],
  args: {
    value: 30,
    max: 100,
    label: '30%'
  }
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {};
