'use client';
import { useRouter } from 'next/navigation';

import { New } from '@/components/atoms/New';
import { StyledHeading } from '@/components/atoms/StyledHeading';

export const KnowledgeSection = () => {
  const router = useRouter();

  return (
    // Container chính - cần có position 'relative' để phần tử nền 'absolute' hoạt động đúng
    // Thêm 'overflow-hidden' để cắt phần ảnh nền bị xoay nếu nó vượt ra ngoài
    <div className="w-full h-auto md:h-[917px] flex flex-col items-center justify-between py-[70px] relative overflow-hidden">
      {/* Phần tử div riêng cho ảnh nền, xoay và làm mờ */}
      <div
        className="absolute w-full h-full
                   bg-[url('/scrath.png')] bg-contain bg-bottom bg-no-repeat opacity-[.07] z-0"
        style={{
          transform: 'rotate(65.33deg) scale(1.5)',
          top: '-120px',
          left: '-600px'
        }}
      >
        {/* Div này chỉ dùng cho hiệu ứng nền */}
      </div>
      {/* Nội dung chính - đảm bảo nội dung nằm phía trên lớp nền */}
      {/* Thêm position 'relative' và z-index cao hơn (ví dụ: z-10) cho các phần tử nội dung */}
      {/* để đảm bảo chúng không bị lớp nền che khuất */}
      <StyledHeading
        title="Tin Tức & Hướng Dẫn"
        subTitle="Chia sẻ kiến thức và bí quyết sử dụng Yến hiệu quả mỗi ngày."
      />
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-center relative z-10 my-9">
        <New
          imageUrl="/news.png"
          date="May 13, 2025"
          readTime="5 min"
          title="Yến thô để được bao lâu? Cách bảo quản tổ yến thô đơn giản..."
          description="Bạn đang thắc mắc tổ yến thô để được bao lâu? Cách bảo quản tổ yến sao cho đúng cách? Tổ yến thô là thực..."
          linkUrl=""
        />
        <New
          imageUrl="/news.png"
          date="May 13, 2025"
          readTime="5 min"
          title="Yến thô để được bao lâu? Cách bảo quản tổ yến thô đơn giản..."
          description="Bạn đang thắc mắc tổ yến thô để được bao lâu? Cách bảo quản tổ yến sao cho đúng cách? Tổ yến thô là thực..."
          linkUrl=""
        />
        <New
          imageUrl="/news.png"
          date="May 13, 2025"
          readTime="5 min"
          title="Yến thô để được bao lâu? Cách bảo quản tổ yến thô đơn giản..."
          description="Bạn đang thắc mắc tổ yến thô để được bao lâu? Cách bảo quản tổ yến sao cho đúng cách? Tổ yến thô là thực..."
          linkUrl=""
        />
      </div>
      <button
        type="button"
        className="border-2 border-black px-4 py-2 rounded-lg text-[#2A2A40] font-semibold text-lg hover:bg-black hover:text-white relative z-10" // Thêm class z-index
        onClick={() => router.push('/products')}
      >
        Xem tất cả sản phẩm
      </button>
    </div>
  );
};
