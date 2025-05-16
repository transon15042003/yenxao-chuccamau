import type { Meta, StoryObj } from '@storybook/react';

import { ShippingInfomationForm } from './ShippingInfomationForm';

const meta: Meta<typeof ShippingInfomationForm> = {
  title: 'Organisms/ShippingInfomationForm',
  component: ShippingInfomationForm,
  tags: ['autodocs'],
  args: {}
};

export default meta;

type Story = StoryObj<typeof ShippingInfomationForm>;

export const Default: Story = {};
