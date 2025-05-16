import type { Meta, StoryObj } from '@storybook/react';

import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Atoms/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  args: {
    placeholder: 'Searching',
    className: '',
    iconSize: 22
  }
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};
