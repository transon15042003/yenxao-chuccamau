'use client';
import { BlogPost } from '@/types/blog';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getLatestBlogs } from 'src/services/blog.service';

import { Button } from '@/components/atoms/Button';
import { NewFeed } from '@/components/molecules/NewFeed';

import SectionTitle from '../../molecules/SectionTitle/SectionTitle';

export const KnowledgeSection = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [latestBlogs, setLatestBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const blogs = await getLatestBlogs();
        setLatestBlogs(blogs);
      } catch (error) {
        console.error('Lỗi khi tải bài viết mới nhất:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-between py-[70px] relative overflow-hidden">
      {/* Phần tử div riêng cho ảnh nền, xoay và làm mờ */}
      <div
        className="absolute w-full h-full
                   bg-[url('/images/backgrounds/scrath.png')] bg-contain bg-bottom bg-no-repeat opacity-[.07] z-0"
        style={{
          transform: 'rotate(65.33deg) scale(1.5)',
          top: '-120px',
          left: '-600px'
        }}
      >
        {/* Div này chỉ dùng cho hiệu ứng nền */}
      </div>

      <SectionTitle
        heading="Tin Tức & Hướng Dẫn"
        subHeading="Chia sẻ kiến thức và bí quyết sử dụng Yến hiệu quả mỗi ngày."
      />

      <NewFeed initialBlogs={latestBlogs} loading={loading} />

      <Button
        className="border-2 border-black text-[#2A2A40] font-semibold py-2 hover:bg-black hover:text-white"
        fill="outline"
        onClick={() => router.push('/products')}
      >
        Xem tất cả sản phẩm
      </Button>
    </div>
  );
};
