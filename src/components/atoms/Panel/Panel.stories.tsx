import type { Meta, StoryObj } from '@storybook/react';

import { Panel } from './Panel';

const meta: Meta<typeof Panel> = {
  title: 'Atoms/Panel',
  component: Panel,
  tags: ['autodocs'],
  args: {
    width: 1440,
    height: 583,
    imageSrc: 'string',
    className: 'string'
  }
};

export default meta;

type Story = StoryObj<typeof Panel>;

export const Default: Story = {};
