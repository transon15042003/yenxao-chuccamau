import { StoryObj } from '@storybook/react';

import { MinusSVG } from './MinusSVG';

export default {
  title: 'icons/MinusSVG',
  component: MinusSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof MinusSVG>;

export const Default: Story = {};
