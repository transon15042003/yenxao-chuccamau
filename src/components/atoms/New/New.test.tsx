// 1. Import React và các thứ liên quan từ React
import { render, screen } from '@/tests/test-utils';
import React from 'react';
import type { ReactNode } from 'react'; // Cần cho kiểu của children trong mock Link

// 2. Import các chức năng từ thư viện Testing (internal/alias)

// --- Bắt đầu Mock cho các component Next.js (External libs) ---
// Mock cho component next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => {
    return <img src={src} alt={alt} />;
  }
}));

// Mock cho component next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children }: { href: string; children: ReactNode }) => {
    return <a href={href}>{children}</a>;
  }
}));
// --- Kết thúc Mock ---

// 3. Import component cần test (relative path)
import { New } from './New';

describe('New', () => {
  const mockProps = {
    imageUrl: 'test-article-image.png',
    date: 'Nov 20, 2023',
    readTime: '10 min',
    title: 'Cách sử dụng Yến sào hiệu quả nhất',
    description: 'Yến sào mang lại nhiều lợi ích sức khỏe...',
    linkUrl: '/bai-viet/cach-su-dung-yen-sao'
  };

  test('renders New component with all required props', () => {
    render(<New {...mockProps} />);

    const imageElement = screen.getByAltText(mockProps.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', '/images/backgrounds/' + mockProps.imageUrl);

    expect(screen.getByText(mockProps.date)).toBeInTheDocument();
    expect(screen.getByText(mockProps.readTime)).toBeInTheDocument();

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    expect(screen.getByText(mockProps.description)).toBeInTheDocument();

    const linkElement = screen.getByRole('link', { name: /Xem Thêm/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', mockProps.linkUrl);
  });
});
