import { StoryObj } from '@storybook/react';

import { ReloadSVG } from './ReloadSVG';

export default {
  title: 'icons/ReloadSVG',
  component: ReloadSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof ReloadSVG>;

export const Default: Story = {};
