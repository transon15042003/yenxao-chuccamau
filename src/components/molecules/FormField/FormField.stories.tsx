import type { Meta, StoryObj } from '@storybook/react';

import { FormField } from './FormField';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  tags: ['autodocs'],
  args: {
    label: 'this is label',
    type: 'text'
  }
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {};
