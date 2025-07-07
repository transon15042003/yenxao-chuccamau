import { StoryObj } from '@storybook/react';

import { LargerCalendarSVG } from './LargerCalendarSVG';

export default {
  title: 'icons/LargerCalendarSVG',
  component: LargerCalendarSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof LargerCalendarSVG>;

export const Default: Story = {};
