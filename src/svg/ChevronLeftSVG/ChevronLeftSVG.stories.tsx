import { StoryObj } from '@storybook/react';

import { ChevronLeftSVG } from './ChevronLeftSVG';

export default {
  title: 'icons/ChevronLeftSVG',
  component: ChevronLeftSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof ChevronLeftSVG>;

export const Default: Story = {};
