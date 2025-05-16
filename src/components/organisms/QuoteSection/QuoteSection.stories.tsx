import { Quote as QuoteType } from '@/types/quote';
import type { Meta, StoryObj } from '@storybook/react';

import { QuoteSection } from './QuoteSection';

jest.mock('@/components/atoms/Quote', () => ({
  __esModule: true,
  // Trả về một placeholder trực quan hơn cho Storybook
  Quote: (props: QuoteType) => (
    <div
      style={{ border: '1px dashed #ccc', padding: '15px', margin: '10px 0', fontStyle: 'italic' }}
    >
      {props.content} - {props.username} ({props.rate}/5)
    </div>
  )
}));

jest.mock('@/components/atoms/DirectionControl', () => ({
  __esModule: true,
  // Trả về nút placeholder đơn giản
  DirectionControl: (props: { direction?: boolean; onClick: () => void }) => (
    <button
      onClick={props.onClick}
      style={{ margin: '0 5px', padding: '5px 10px', border: '1px solid gray' }}
    >
      {props.direction === false ? '< Previous' : 'Next >'}
    </button>
  )
}));

const mockQuotes: QuoteType[] = [
  {
    id: 1,
    content: 'Đây là trích dẫn mẫu số 1. Khách hàng rất hài lòng về sản phẩm A!',
    avatarSrc: '/avatars/female.png', // Đảm bảo đường dẫn ảnh tồn tại trong thư mục public
    username: 'Khách hàng A',
    rate: 5,
    createdAt: '2025-01-01T10:00:00Z' // Thêm createdAt nếu QuoteType có
  },
  {
    id: 2,
    content: 'Đây là trích dẫn mẫu số 2. Dịch vụ khách hàng thật tuyệt vời!',
    avatarSrc: '/avatars/male.png', // Đảm bảo đường dẫn ảnh tồn tại trong thư mục public
    username: 'Khách hàng B',
    rate: 4,
    createdAt: '2025-01-02T10:00:00Z'
  },
  {
    id: 3,
    content: 'Đây là trích dẫn mẫu số 3. Tôi sẽ giới thiệu cho bạn bè và gia đình.',
    avatarSrc: '/avatars/female.png', // Đảm bảo đường dẫn ảnh tồn tại trong thư mục public
    username: 'Khách hàng C',
    rate: 5,
    createdAt: '2025-01-03T10:00:00Z'
  }
];

const meta: Meta<typeof QuoteSection> = {
  title: 'Molecules/QuoteSection',
  component: QuoteSection,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof QuoteSection>;

export const Default: Story = {
  args: { initialQuotes: mockQuotes }
};
