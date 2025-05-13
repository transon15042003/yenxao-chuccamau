// src/components/atoms/StyledHeading/StyledHeading.stories.tsx (Ví dụ về đường dẫn)
import type { Meta, StoryObj } from '@storybook/react';

import { StyledHeading } from './StyledHeading'; // Điều chỉnh đường dẫn import nếu cần

// Metadata cho component
const meta: Meta<typeof StyledHeading> = {
  title: 'Components/StyledHeading', // Đường dẫn hiển thị trong Storybook
  component: StyledHeading,
  parameters: {
    // Tùy chọn cấu hình toàn cục cho component này
  },
  // Định nghĩa các args có thể kiểm soát trong UI Storybook
  argTypes: {
    title: { control: 'text' }, // Cho phép nhập văn bản cho title
    subTitle: { control: 'text' } // Cho phép nhập văn bản cho subTitle
  }
};

export default meta;

// Định nghĩa kiểu Story
type Story = StoryObj<typeof StyledHeading>;

// Story mẫu: Chỉ hiển thị tiêu đề chính (title)
export const OnlyTitle: Story = {
  args: {
    title: 'Tiêu đề chính' // Giá trị mặc định cho title trong story này
    // subTitle không được set, nên sẽ không hiển thị
  }
};

// Story mẫu: Hiển thị cả tiêu đề chính và tiêu đề phụ (subTitle)
export const WithSubtitle: Story = {
  args: {
    title: 'Tiêu đề chính có phụ đề',
    subTitle: 'Đây là tiêu đề phụ' // Giá trị cho subTitle trong story này
  }
};

// Story mẫu: Với nội dung dài hơn
export const LongContent: Story = {
  args: {
    title: 'Đây là một tiêu đề chính rất dài để kiểm tra cách hiển thị',
    subTitle: 'Đây là một phụ đề cũng khá dài để xem nó trông như thế nào bên dưới tiêu đề chính.'
  }
};
