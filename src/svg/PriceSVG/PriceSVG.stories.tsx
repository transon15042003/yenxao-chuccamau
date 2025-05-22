import { StoryObj } from '@storybook/react';

import { PriceSVG } from './PriceSVG';

export default {
  title: 'icons/PriceSVG',
  component: PriceSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof PriceSVG>;

export const Default: Story = {};
