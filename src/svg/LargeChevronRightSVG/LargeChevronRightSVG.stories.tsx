import { StoryObj } from '@storybook/react';

import { LargeChevronRightSVG } from './LargeChevronRightSVG';

export default {
  title: 'icons/LargeChevronRightSVG',
  component: LargeChevronRightSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof LargeChevronRightSVG>;

export const Default: Story = {};
