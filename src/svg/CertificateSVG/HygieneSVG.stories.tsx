import { StoryObj } from '@storybook/react';

import { HygieneSVG } from './HygieneSVG';

export default {
  title: 'icons/HygieneSVG', // Tiêu đề trong Storybook
  component: HygieneSVG,
  args: {}
};

type Story = StoryObj<typeof HygieneSVG>;

export const Default: Story = {};
