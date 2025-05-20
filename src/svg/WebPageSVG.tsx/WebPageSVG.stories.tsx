import { StoryObj } from '@storybook/react';

import { WebPageSVG } from './WebPageSVG';

export default {
  title: 'icons/WebPageSVG',
  component: WebPageSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof WebPageSVG>;

export const Default: Story = {};
