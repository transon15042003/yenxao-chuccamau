// KnowledgeSection.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

import { KnowledgeSection } from './KnowledgeSection'; // Import component

// Cấu hình Meta cho component
const meta: Meta<typeof KnowledgeSection> = {
  title: 'Organisms/KnowledgeSection', // Đường dẫn hiển thị trong Storybook
  component: KnowledgeSection, // Component cần tạo story
  tags: ['autodocs'], // Tự động tạo tài liệu (nếu cấu hình)
  // argTypes được bỏ trống vì component không nhận props
  argTypes: {}
  // parameters: {
  //   // Các cấu hình Storybook khác nếu cần
  // },
};

export default meta;

// Định nghĩa kiểu Story
type Story = StoryObj<typeof KnowledgeSection>;

// Story mẫu: Trạng thái mặc định của KnowledgeSection
// Vì component không có props, story này sẽ hiển thị component với trạng thái render mặc định
export const Default: Story = {
  args: {
    // args được bỏ trống vì component không nhận props
  }
};
