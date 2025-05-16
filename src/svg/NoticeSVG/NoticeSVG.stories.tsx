import { StoryObj } from '@storybook/react';

import { NoticeSVG } from './NoticeSVG';

export default {
  title: 'icons/NoticeSVG',
  component: NoticeSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof NoticeSVG>;

export const Default: Story = {};
