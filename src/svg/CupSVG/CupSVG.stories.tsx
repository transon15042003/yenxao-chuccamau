import { StoryObj } from '@storybook/react';

import { CupSVG } from './CupSVG';

export default {
  title: 'icons/CupSVG',
  component: CupSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof CupSVG>;

export const Default: Story = {};
