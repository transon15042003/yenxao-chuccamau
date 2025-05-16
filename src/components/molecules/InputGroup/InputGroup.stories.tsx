import type { Meta, StoryObj } from '@storybook/react';

import { InputGroup } from './InputGroup';

const meta: Meta<typeof InputGroup> = {
  title: 'Molecules/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  args: {
    id: 'test-input',
    label: 'Test Input Label',
    required: true,
    placeholder: 'Test Placeholder'
  }
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const GroupInput: Story = {};

export const WithErrorMessage: Story = {
  args: {
    errorMessage: 'Test Error Message'
  }
};
