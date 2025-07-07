import { StoryObj } from '@storybook/react';

import { CheckSVG } from './CheckSVG';

export default {
  title: 'icons/CheckSVG',
  component: CheckSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof CheckSVG>;

export const Default: Story = {};
