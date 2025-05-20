import type { Meta, StoryObj } from '@storybook/react';

import { AreaInputGroup } from './AreaInputGroup';

const meta: Meta<typeof AreaInputGroup> = {
  title: 'Atoms/AreaInputGroup',
  component: AreaInputGroup,
  tags: ['autodocs'],
  args: {}
};

export default meta;

type Story = StoryObj<typeof AreaInputGroup>;

export const Default: Story = {
  args: {
    line: undefined
  }
};
