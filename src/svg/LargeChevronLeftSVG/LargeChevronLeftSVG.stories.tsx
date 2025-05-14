import { StoryObj } from '@storybook/react';

import { LargeChevronLeftSVG } from './LargeChevronLeftSVG';

export default {
  title: 'icons/LargeChevronLeftSVG',
  component: LargeChevronLeftSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof LargeChevronLeftSVG>;

export const Default: Story = {};
