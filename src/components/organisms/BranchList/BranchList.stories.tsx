import type { Meta, StoryObj } from '@storybook/react';

import { BranchList } from './BranchList';

const meta: Meta<typeof BranchList> = {
  title: 'Organisms/BranchList',
  component: BranchList,
  tags: ['autodocs'],
  args: {
    contactData: [
      {
        branchName: 'Chi nhánh TP. Hồ Chí Minh',
        data: [
          {
            icon: 'location',
            label: 'Địa chỉ',
            details: ['123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh']
          },
          {
            icon: 'phone',
            label: 'Điện thoại',
            details: ['(028) 3822 1234', 'Hotline: 0901 234 567']
          },
          {
            icon: 'email',
            label: 'Email',
            details: ['info@congtyabc.com', 'support@congtyabc.com']
          },
          {
            icon: 'clock',
            label: 'Giờ làm việc',
            details: ['Thứ Hai - Thứ Sáu: 8:00 - 17:30', 'Thứ Bảy: 8:00 - 12:00', 'Chủ Nhật: Nghỉ']
          }
        ]
      },
      {
        branchName: 'Chi nhánh TP. Hồ Chí Minh',
        data: [
          {
            icon: 'location',
            label: 'Địa chỉ',
            details: ['123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh']
          },
          {
            icon: 'phone',
            label: 'Điện thoại',
            details: ['(028) 3822 1234', 'Hotline: 0901 234 567']
          },
          {
            icon: 'email',
            label: 'Email',
            details: ['info@congtyabc.com', 'support@congtyabc.com']
          },
          {
            icon: 'clock',
            label: 'Giờ làm việc',
            details: ['Thứ Hai - Thứ Sáu: 8:00 - 17:30', 'Thứ Bảy: 8:00 - 12:00', 'Chủ Nhật: Nghỉ']
          }
        ]
      }
    ]
  }
};

export default meta;

type Story = StoryObj<typeof BranchList>;

export const Default: Story = {};
