// AboutSection.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react'; // Import React vì cần thiết khi sử dụng JSX

// Import component cần tạo story
import { AboutSection } from './AboutSection';

// --- Mock các component con cho Storybook ---
// Tương tự như test, chúng ta mock component con cho Storybook
// để AboutSection có thể hiển thị mà không phụ thuộc vào các component con phức tạp.
// Trả về nội dung placeholder đơn giản.
jest.mock('@/components/organisms/Home/Intro/Intro', () => ({
  __esModule: true,
  default: () => (
    <div style={{ border: '1px dashed gray', padding: '20px', textAlign: 'center' }}>
      Placeholder for Intro
    </div>
  )
}));

jest.mock('../Certificates', () => ({
  __esModule: true,
  Certificates: () => (
    <div style={{ border: '1px dashed gray', padding: '20px', textAlign: 'center' }}>
      Placeholder for Certificates
    </div>
  )
}));
// --- Kết thúc Mock ---

// Cấu hình Meta cho component
const meta: Meta<typeof AboutSection> = {
  title: 'Sections/AboutSection', // Đường dẫn hiển thị trong Storybook (hoặc tên nhóm phù hợp)
  component: AboutSection, // Component cần tạo story
  tags: ['autodocs'], // Tự động tạo tài liệu (nếu cấu hình)
  // argTypes được bỏ trống vì component không nhận props
  argTypes: {}
  // parameters: {
  //   // Thêm các parameters Storybook nếu cần, ví dụ:
  //   // layout: 'fullscreen', // Có thể hữu ích cho các section chiếm toàn màn hình
  // },
};

export default meta;

// Định nghĩa kiểu Story
type Story = StoryObj<typeof AboutSection>;

// Story mẫu: Trạng thái mặc định của AboutSection
// Vì component không có props, story này chỉ đơn giản render component ở trạng thái mặc định
export const Default: Story = {
  args: {
    // args được bỏ trống vì component không nhận props
  }
  // Có thể thêm decorators nếu cần bao bọc component trong provider/context, v.v.
  // decorators: [
  //   (Story) => (
  //     // <MyContextProvider>
  //       <Story />
  //     // </MyContextProvider>
  //   ),
  // ],
};
