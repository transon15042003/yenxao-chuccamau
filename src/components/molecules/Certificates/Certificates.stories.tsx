import type { Meta, StoryObj } from '@storybook/react';

import { Certificates } from './Certificates';

const meta: Meta<typeof Certificates> = {
  title: 'Molecules/Certificates',
  component: Certificates,
  tags: ['autodocs'],
  args: {}
};

export default meta;

type Story = StoryObj<typeof Certificates>;

export const Default: Story = {};
