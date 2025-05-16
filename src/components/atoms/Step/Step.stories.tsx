import { CartSVG } from '@/svg/CartSVG/CartSVG';
import type { Meta, StoryObj } from '@storybook/react';

import { Stepper } from './Step';
const meta: Meta<typeof Stepper> = {
  title: 'Atoms/Step',
  component: Stepper,
  tags: ['autodocs'],
  args: {
    steps: [
      { label: '1. Giỏ hàng', icon: <CartSVG className="w-6 h-6" /> },
      { label: '2. Thanh toán' },
      { label: '3. Hoàn tất' }
    ],
    currentStep: 2
  }
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {};
