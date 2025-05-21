'use client';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/atoms/Button';
import { New } from '@/components/atoms/New';

import SectionTitle from '../../molecules/SectionTitle/SectionTitle';

export const KnowledgeSection = () => {
  const router = useRouter();

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
      <div className="w-full lg:w-5/6 flex flex-wrap flex-col md:flex-row justify-between items-center relative z-10 my-9">
        <New
          imageUrl="news.png"
          date="May 13, 2025"
          readTime="5 min"
          title="Yến thô để được bao lâu? Cách bảo quản tổ yến thô đơn giản..."
          description="Bạn đang thắc mắc tổ yến thô để được bao lâu? Cách bảo quản tổ yến sao cho đúng cách? Tổ yến thô là thực..."
          linkUrl=""
        />
        <New
          imageUrl="news.png"
          date="May 13, 2025"
          readTime="5 min"
          title="Yến thô để được bao lâu? Cách bảo quản tổ yến thô đơn giản..."
          description="Bạn đang thắc mắc tổ yến thô để được bao lâu? Cách bảo quản tổ yến sao cho đúng cách? Tổ yến thô là thực..."
          linkUrl=""
        />
        <New
          imageUrl="news.png"
          date="May 13, 2025"
          readTime="5 min"
          title="Yến thô để được bao lâu? Cách bảo quản tổ yến thô đơn giản..."
          description="Bạn đang thắc mắc tổ yến thô để được bao lâu? Cách bảo quản tổ yến sao cho đúng cách? Tổ yến thô là thực..."
          linkUrl=""
        />
      </div>

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
