// src/components/atoms/Quote/Quote.stories.tsx (Ví dụ về đường dẫn)
import type { Meta, StoryObj } from '@storybook/react';

import { Quote } from './Quote'; // Điều chỉnh đường dẫn import nếu cần

// Metadata cho component
const meta: Meta<typeof Quote> = {
  title: 'Components/Quote', // Đường dẫn hiển thị trong Storybook
  component: Quote,
  parameters: {
    // Tùy chọn cấu hình toàn cục
  },
  // Định nghĩa các args có thể kiểm soát trong UI Storybook
  argTypes: {
    content: { control: 'text' }, // Cho phép nhập văn bản cho nội dung
    avatarSrc: { control: 'text' }, // Cho phép nhập đường dẫn ảnh avatar
    username: { control: 'text' }, // Cho phép nhập văn bản cho tên người dùng
    rate: { control: { type: 'range', min: 0, max: 5, step: 1 } } // Cho phép chọn số từ 0 đến 5
  }
};

export default meta;

// Định nghĩa kiểu Story
type Story = StoryObj<typeof Quote>;

// Story mẫu: Một quote cơ bản với 5 sao
export const Default: Story = {
  args: {
    content:
      'Đây là nội dung của một quote mẫu. Nó hiển thị ý kiến hoặc đánh giá của khách hàng về sản phẩm hoặc dịch vụ.',
    avatarSrc: '/avatars/default.png', // Đường dẫn ảnh avatar mẫu
    username: 'Tên Người Dùng Mẫu',
    rate: 5
  }
};

// Story mẫu: Quote với số sao khác
export const FourStars: Story = {
  args: {
    ...Default.args, // Kế thừa các args từ Default
    username: 'Người Dùng Bốn Sao',
    rate: 4 // Chỉ thay đổi số sao
  }
};

export const TwoStars: Story = {
  args: {
    ...Default.args,
    username: 'Người Dùng Hai Sao',
    rate: 2
  }
};

export const ZeroStars: Story = {
  args: {
    ...Default.args,
    username: 'Người Dùng Không Sao',
    rate: 0
  }
};

// Story mẫu: Quote với nội dung dài hơn
export const LongContent: Story = {
  args: {
    ...Default.args,
    content:
      'Nội dung này dài hơn đáng kể so với nội dung mẫu ban đầu. Nó giúp kiểm tra xem component xử lý văn bản dài và ngắt dòng như thế nào trong bố cục của nó. Đảm bảo rằng văn bản vẫn dễ đọc và không làm hỏng giao diện chung.'
  }
};

// Story mẫu: Với avatar và tên người dùng khác
export const AnotherUser: Story = {
  args: {
    ...Default.args,
    avatarSrc: '/avatars/another.png', // Ảnh avatar khác
    username: 'Khách Hàng Khác',
    rate: 3
  }
};
