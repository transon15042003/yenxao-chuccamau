import type { Meta, StoryObj } from '@storybook/react';

import { FormTextArea } from './AreaInputGroup';

const meta: Meta<typeof FormTextArea> = {
  title: 'Atoms/FormTextArea',
  component: FormTextArea,
  tags: ['autodocs'],
  args: {}
};

export default meta;

type Story = StoryObj<typeof FormTextArea>;

export const Default: Story = {
  args: {
    line: undefined
  }
};
