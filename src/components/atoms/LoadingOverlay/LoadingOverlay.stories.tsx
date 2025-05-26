import type { Meta, StoryObj } from '@storybook/react';

import { LoadingOverlay } from './LoadingOverlay';

const meta: Meta<typeof LoadingOverlay> = {
  title: 'Atoms/LoadingOverlay',
  component: LoadingOverlay,
  tags: ['autodocs'],
  args: {}
};

export default meta;

type Story = StoryObj<typeof LoadingOverlay>;

export const Default: Story = {};
