import { StoryObj } from '@storybook/react';

import { DiamondSVG } from './DiamondSVG';

export default {
  title: 'icons/DiamondSVG',
  component: DiamondSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof DiamondSVG>;

export const Default: Story = {};
