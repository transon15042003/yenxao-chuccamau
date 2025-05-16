import type { Meta, StoryObj } from '@storybook/react';

import { FormInput } from './FormInput';

const meta: Meta<typeof FormInput> = {
  title: 'Atoms/FormInput',
  component: FormInput,
  tags: ['autodocs'],
  args: {},
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof FormInput>;

export const Default: Story = {
  args: {
    type: 'text'
  }
};
