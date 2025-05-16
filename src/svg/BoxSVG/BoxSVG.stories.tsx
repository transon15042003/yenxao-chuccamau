import { StoryObj } from '@storybook/react';

import { BoxSVG } from './BoxSVG';

export default {
  title: 'icons/BoxSVG',
  component: BoxSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof BoxSVG>;

export const Default: Story = {};
