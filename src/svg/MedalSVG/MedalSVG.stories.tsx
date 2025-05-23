import { StoryObj } from '@storybook/react';

import { MedalSVG } from './MedalSVG';

export default {
  title: 'icons/MedalSVG',
  component: MedalSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof MedalSVG>;

export const Default: Story = {};
