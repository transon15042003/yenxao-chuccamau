import type { Meta, StoryObj } from '@storybook/react';

import InfoBox from './InfoBox';

const meta: Meta<typeof InfoBox> = {
  title: 'Molecules/InfoBox',
  component: InfoBox,
  tags: ['autodocs'],
  args: {
    title: 'Test',
    description: 'Lorem isprum'
  }
};

export default meta;

type Story = StoryObj<typeof InfoBox>;

export const Default: Story = {};
