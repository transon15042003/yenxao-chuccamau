import { StoryObj } from '@storybook/react';

import { PlusSVG } from './PlusSVG';

export default {
  title: 'icons/PlusSVG',
  component: PlusSVG,
  args: {
    className: 'text-primary'
  }
};

type Story = StoryObj<typeof PlusSVG>;

export const Default: Story = {};
