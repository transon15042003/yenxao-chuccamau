import { StoryObj } from '@storybook/react';

import { DevelopSVG } from './DevelopSVG';

export default {
  title: 'icons/DevelopSVG',
  component: DevelopSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof DevelopSVG>;

export const Default: Story = {};
