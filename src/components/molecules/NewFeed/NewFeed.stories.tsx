import type { Meta, StoryObj } from '@storybook/react';

import { NewFeed } from './NewFeed';

const blogs = [
  {
    id: 'blog-1',
    slug: 'yen-sao-la-gi-hanh-trinh-ky-dieu-tu-thien-nhien-den-mon-qua-cho-suc-khoe',
    title: 'Yến sào là gì? Hành trình kỳ diệu từ thiên nhiên đến món quà cho sức khỏe',
    postedDate: '2024-01-15T10:20:10',
    minRead: 5,
    viewer: 95765,
    relation: ['blog-2', 'blog-3', 'blog-4'],
    description:
      'Tìm hiểu yến sào là gì, nguồn gốc từ thiên nhiên hoang dã và hành trình trở thành món quà quý giá cho sức khỏe con người, với những công dụng bồi bổ và cải thiện sức đề kháng.',
    thumbnailUrl: '/images/blog/blog_1_1.png'
  },
  {
    id: 'blog-2',
    slug: 'yen-trang-yen-hong-yen-huyet---khac-nhau-the-nao-nen-chon-loai-nao-phu-hop',
    title: 'Yến trắng, yến hồng, yến huyết – Khác nhau thế nào? Nên chọn loại nào phù hợp?',
    postedDate: '2024-01-20T09:00:00',
    minRead: 7,
    viewer: 78123,
    relation: ['blog-1', 'blog-3', 'blog-4'],
    description:
      'Khám phá sự khác biệt về màu sắc, giá trị dinh dưỡng và cách hình thành của yến trắng, yến hồng, yến huyết để lựa chọn loại yến sào phù hợp nhất với nhu cầu và ngân sách của bạn.',
    thumbnailUrl: '/images/blog/blog_2_1.png'
  },
  {
    id: 'blog-3',
    slug: 'yen-sao-co-gi-ma-tot-cho-suc-khoe-dien-vay-kham-pha-thanh-phan-dinh-duong-vang-trong-to-yen',
    title:
      'Yến sào có gì mà tốt cho sức khỏe đến vậy? Khám phá thành phần dinh dưỡng "vàng" trong tổ yến',
    postedDate: '2024-02-01T14:30:00',
    minRead: 6,
    viewer: 65432,
    relation: ['blog-1', 'blog-2', 'blog-5'],
    description:
      'Hướng dẫn chi tiết cách phân biệt yến thô (tổ yến nguyên bản chưa qua xử lý) và yến tinh chế (đã làm sạch) để bạn có lựa chọn thông minh khi mua yến sào.',
    thumbnailUrl: '/images/blog/blog_3_1.png'
  }
];

const meta: Meta<typeof NewFeed> = {
  title: 'Molecules/NewFeed',
  component: NewFeed,
  tags: ['autodocs'],
  args: {}
};

export default meta;

type Story = StoryObj<typeof NewFeed>;

export const Default: Story = {
  args: {
    initialBlogs: blogs
  }
};
