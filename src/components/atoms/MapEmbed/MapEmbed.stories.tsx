import type { Meta, StoryObj } from '@storybook/react';

import { MapEmbed } from './MapEmbed';

const meta: Meta<typeof MapEmbed> = {
  title: 'Atoms/MapEmbed',
  component: MapEmbed,
  tags: ['autodocs'],
  args: {
    embedUrl: 'https:google.maps'
  }
};

export default meta;

type Story = StoryObj<typeof MapEmbed>;

export const Default: Story = {};
