import { StoryObj } from '@storybook/react';

import { LikeSVG } from './LikeSVG';

export default {
  title: 'icons/LikeSVG',
  component: LikeSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof LikeSVG>;

export const Default: Story = {};
