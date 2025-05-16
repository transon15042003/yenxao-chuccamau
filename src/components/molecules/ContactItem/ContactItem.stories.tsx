import { ClockSVG } from '@/svg/ContactSVG/ClockSVG/ClockSVG';
import type { Meta, StoryObj } from '@storybook/react';

import { ContactItem } from './ContactItem';

const meta: Meta<typeof ContactItem> = {
  title: 'Molecules/ContactItem',
  component: ContactItem,
  tags: ['autodocs'],
  args: {
    icon: <ClockSVG />,
    label: 'Giờ làm việc',
    details: ['Thứ Hai - Thứ Sáu: 8:00 - 17:30', 'Thứ Bảy: 8:00 - 12:00', 'Chủ Nhật: Nghỉ']
  }
};

export default meta;

type Story = StoryObj<typeof ContactItem>;

export const Default: Story = {};
