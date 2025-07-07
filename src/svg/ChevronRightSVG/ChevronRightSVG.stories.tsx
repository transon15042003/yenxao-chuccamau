import { StoryObj } from '@storybook/react';

import { ChevronRightSVG } from './ChevronRightSVG';

export default {
  title: 'icons/ChevronRightSVG',
  component: ChevronRightSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof ChevronRightSVG>;

export const Default: Story = {};
