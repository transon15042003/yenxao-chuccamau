import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Atoms/Menu',
  component: Menu,
  tags: ['autodocs'],
  args: {
    className: '',
    size: 42
  }
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {};
