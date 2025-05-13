import type { Meta, StoryObj } from '@storybook/react';

import { QuoteSection } from './QuoteSection';

const meta: Meta<typeof QuoteSection> = {
  title: 'Molecules/QuoteSection',
  component: QuoteSection,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof QuoteSection>;

export const Default: Story = {};
