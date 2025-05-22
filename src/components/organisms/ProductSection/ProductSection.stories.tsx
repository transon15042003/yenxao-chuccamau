import type { Meta, StoryObj } from '@storybook/react';

import { ProductSection } from './ProductSection';

const meta: Meta<typeof ProductSection> = {
  title: 'Organisms/ProductSection',
  component: ProductSection,
  tags: ['autodocs'],
  args: {}
};

export default meta;

type Story = StoryObj<typeof ProductSection>;

export const Default: Story = {};
