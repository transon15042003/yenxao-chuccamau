// New.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

import { New } from './New'; // Import component

// Cấu hình Meta cho component
const meta: Meta<typeof New> = {
  title: 'Atoms/New', // Đường dẫn hiển thị trong Storybook (có thể là Molecules tùy cấu trúc dự án)
  component: New, // Component cần tạo story
  tags: ['autodocs'], // Tự động tạo tài liệu
  // argTypes giúp bạn điều khiển các props trong giao diện Storybook
  argTypes: {
    imageUrl: { control: 'text' },
    date: { control: 'text' },
    readTime: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    linkUrl: { control: 'text' },
    className: { control: 'text' }
  },
  parameters: {
    // Thêm các parameters cấu hình Storybook nếu cần
  }
};

export default meta;

// Định nghĩa kiểu Story
type Story = StoryObj<typeof New>;

// Story mẫu: Trạng thái mặc định của component New
// Args định nghĩa giá trị mặc định cho các props khi xem story này
export const Default: Story = {
  args: {
    imageUrl: '/news.png', // Sử dụng ảnh mẫu (đảm bảo ảnh này tồn tại trong thư mục public)
    date: 'May 13, 2025',
    readTime: '5 min read',
    title: 'Yến thô để được bao lâu? Cách bảo quản tổ yến thô đơn giản...',
    description:
      'Bạn đang thắc mắc tổ yến thô để được bao lâu? Cách bảo quản tổ yến sao cho đúng cách? Tổ yến thô là thực...',
    linkUrl: '#', // Sử dụng '#' cho link mẫu nếu không có URL thật
    className: '' // Mặc định không có className tùy chỉnh
  }
};

// Bạn có thể thêm các stories khác để hiển thị các trạng thái khác nhau
// Ví dụ: Một story với className tùy chỉnh
export const WithCustomClass: Story = {
  args: {
    ...Default.args, // Kế thừa args từ story Default
    className: 'bg-yellow-100 border-red-500 p-6' // Thêm class tùy chỉnh
  }
};
