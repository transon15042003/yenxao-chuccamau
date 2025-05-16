import type { Meta, StoryObj } from '@storybook/react';

import { FormLabel } from './FormLabel';

const meta: Meta<typeof FormLabel> = {
  title: 'Atoms/FormLabel',
  component: FormLabel,
  tags: ['autodocs'],
  args: {
    label: 'This is label',
    required: true
  }
};

export default meta;

type Story = StoryObj<typeof FormLabel>;

export const Default: Story = {
  args: {
    label: 'This is label'
  }
};
