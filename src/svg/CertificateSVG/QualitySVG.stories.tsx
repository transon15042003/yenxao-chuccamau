import { StoryObj } from '@storybook/react';

import { QualitySVG } from './QualitySVG';

export default {
  title: 'icons/QualitySVG',
  component: QualitySVG,
  args: {
    className: ''
  }
};

type Story = StoryObj<typeof QualitySVG>;

export const Default: Story = {};
