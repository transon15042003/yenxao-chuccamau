import { StoryObj } from '@storybook/react';

import { ArrowRightSVG } from './ArrowRightSVG';

export default {
  title: 'icons/ArrowRightSVG',
  component: ArrowRightSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof ArrowRightSVG>;

export const Default: Story = {};
