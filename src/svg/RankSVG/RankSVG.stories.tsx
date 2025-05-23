import { StoryObj } from '@storybook/react';

import { RankSVG } from './RankSVG';

export default {
  title: 'icons/RankSVG',
  component: RankSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof RankSVG>;

export const Default: Story = {};
