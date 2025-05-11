import type { Meta, StoryObj } from '@storybook/react';

import { Panel } from './Panel';

const meta: Meta<typeof Panel> = {
  title: 'Atoms/Panel',
  component: Panel,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof Panel>;

export const Default: Story = {};
