import type { Meta, StoryObj } from '@storybook/react';

import { CertificateTitle } from './CertificateTitle';

const meta: Meta<typeof CertificateTitle> = {
  title: 'Atoms/CertificateTitle',
  component: CertificateTitle,
  tags: ['autodocs'],
  // Định nghĩa giá trị mặc định cho các props trong Storybook Controls và các story con (nếu không ghi đè)
  args: {
    title: 'Vệ Sinh', // Giá trị mặc định cho prop title
    fontSize: 30 // Giá trị mặc định cho prop fontSize
  },

  // Optional: Sử dụng argTypes để tùy chỉnh controls trong Storybook
  argTypes: {
    title: { control: 'text' }, // Hiển thị control dạng text cho title
    fontSize: { control: 'number' } // Hiển thị control dạng số cho fontSize
  }
};

export default meta;

type Story = StoryObj<typeof CertificateTitle>;

// Story mặc định: sử dụng các args đã định nghĩa trong meta
export const Default: Story = {
  args: {
    // Story này kế thừa args từ meta, hoặc bạn có thể ghi đè tại đây
    // title: 'Tiêu đề khác', // Ghi đè title cho riêng story này
    // fontSize: 40, // Ghi đè fontSize cho riêng story này
  }
};

// Ví dụ Story khác: Hiển thị với fontSize nhỏ hơn
export const SmallFont: Story = {
  args: {
    ...meta.args, // Kế thừa tất cả args từ meta trước
    title: 'Small Title', // Đổi nội dung text cho story này
    fontSize: 20 // Ghi đè fontSize thành 20
  }
};

// Ví dụ Story khác: Hiển thị với fontSize lớn hơn
export const LargeFont: Story = {
  args: {
    ...meta.args, // Kế thừa tất cả args từ meta trước
    title: 'Large Title Example', // Đổi nội dung text cho story này
    fontSize: 50 // Ghi đè fontSize thành 50
  }
};
