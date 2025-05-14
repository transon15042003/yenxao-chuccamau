import { StoryObj } from '@storybook/react';

import { Star } from './StarSVG';

export default {
  title: 'icons/StarSVG',
  component: Star,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof Star>;

export const Default: Story = {};
