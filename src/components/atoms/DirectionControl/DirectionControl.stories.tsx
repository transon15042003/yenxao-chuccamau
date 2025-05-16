// src/components/atoms/DirectionControl/DirectionControl.stories.tsx (Ví dụ về đường dẫn)
import type { Meta, StoryObj } from '@storybook/react';

import { DirectionControl } from './DirectionControl'; // Điều chỉnh đường dẫn import nếu cần

// Metadata cho component
const meta: Meta<typeof DirectionControl> = {
  title: 'Components/DirectionControl', // Đường dẫn hiển thị trong Storybook
  component: DirectionControl,
  parameters: {
    // Cấu hình toàn cục cho component này
  },
  // Định nghĩa các args có thể kiểm soát trong UI Storybook
  argTypes: {
    onClick: { action: 'clicked' }, // Sử dụng action addon để log sự kiện click
    direction: { control: 'boolean' }, // Cho phép kiểm soát prop boolean 'direction'
    className: { control: 'text' } // Cho phép nhập class tùy chỉnh cho button
  }
};

export default meta;

// Định nghĩa kiểu Story
type Story = StoryObj<typeof DirectionControl>;

// Story mẫu: Hướng mặc định (phải)
export const DefaultRight: Story = {
  args: {}
};

// Story mẫu: Hướng sang trái
export const Left: Story = {
  args: {
    direction: false // Đặt 'direction' thành false cho mũi tên trái và style tương ứng
  }
};

// Story mẫu: Với class tùy chỉnh được thêm vào
export const WithCustomClass: Story = {
  args: {
    direction: true, // Có thể là true hoặc false
    // Thêm các class Tailwind tùy chỉnh vào đây
    className: 'rounded-lg bg-blue-500 hover:bg-blue-600'
  }
};

// Story mẫu: Chỉ thay đổi màu sắc (bằng cách ghi đè class mặc định thông qua className)
// Lưu ý: Cách này phụ thuộc vào thứ tự các class trong component và tính cụ thể của CSS
// Một prop riêng cho màu nền/mũi tên sẽ rõ ràng hơn, nhưng đây là cách dùng className
/*
export const OverrideColors: Story = {
    args: {
        onClick: action('Clicked Override Colors'),
        direction: false, // Hoặc true
        // Ghi đè màu nền và màu border mặc định
        className: '!bg-purple-500 !border-purple-700', // Dùng !important để chắc chắn ghi đè
    }
};
*/
