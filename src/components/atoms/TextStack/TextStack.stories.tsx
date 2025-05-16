import type { Meta, StoryObj } from '@storybook/react';

import { TextStack } from './TextStack';

const meta: Meta<typeof TextStack> = {
  title: 'Atoms/TextStack',
  component: TextStack,
  tags: ['autodocs'],
  args: {
    label: 'Điện thoại',
    details: ['(028) 3822 1234', 'Hotline: 0901 234 567']
  }
};

export default meta;

type Story = StoryObj<typeof TextStack>;

export const Default: Story = {};
