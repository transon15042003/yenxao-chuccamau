import Image from 'next/image';
import React from 'react';
import { FaThumbsUp, FaCheck } from 'react-icons/fa';

const TopHighlight = () => {
  return (
    <div className="relative overflow-hidden z-10 w-5/6 mx-auto mt-16 mb-6 rounded-2xl border-2 border-secondary flex flex-col gap-8 px-2 py-10 md:flex-row md:justify-between md:items-center md:py-16 md:gap-8">
      {/* Top left arc */}
      <div className="absolute -top-12 -left-4 w-24 h-24 md:w-32 md:h-32 border-[3px] border-secondary border-t-0 border-l-0 rounded-br-full pointer-events-none z-20" />
      {/* Bottom right arc */}
      <div className="absolute -bottom-12 -right-4 w-24 h-24 md:w-32 md:h-32 border-[3px] border-secondary border-b-0 border-r-0 rounded-tl-full pointer-events-none z-20" />

      <div className="absolute inset-0 w-full h-full rounded-2xl pointer-events-none z-0">
        <Image
          src="/images/footer/footer-background-2.png"
          alt="top highlight background"
          className="w-full h-full object-cover rounded-2xl"
          width={1000}
          height={1000}
        />
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#920202]/80" />
      </div>

      <div className="flex flex-col items-center gap-2 flex-1 z-10 mb-8 md:mb-0">
        <Image
          src="/images/footer/chinhhang-background.png"
          alt="Chính hãng"
          className="w-32 h-36 mb-2"
          width={1000}
          height={1000}
        />
        <div className="text-2xl font-[800] bg-secondary-gradient-90 bg-clip-text text-transparent">
          CHÍNH HÃNG
        </div>
        <div className="text-lg font-[600] text-white/80">Không hàng giả</div>
      </div>

      <div className="flex flex-col items-center gap-2 flex-1 z-10 mb-8 md:mb-0">
        <div className="relative w-36 h-36 mb-2 flex items-center justify-center">
          <Image
            src="/images/footer/camket-background.png"
            alt="Cam kết"
            className="w-36 h-36"
            width={1000}
            height={1000}
          />
          <FaThumbsUp
            className="absolute text-white w-12 h-12 drop-shadow-lg"
            style={{ left: '50%', top: '40%', transform: 'translate(-50%, -50%)' }}
          />
        </div>
        <div className="text-2xl font-[800] bg-secondary-gradient-90 bg-clip-text text-transparent">
          CAM KẾT
        </div>
        <div className="text-lg font-[600] text-white/80">Phục vụ tận tâm</div>
      </div>

      <div className="flex flex-col items-center gap-2 flex-1 z-10">
        <div className="relative w-36 h-36 mb-2 flex items-center justify-center">
          <Image
            src="/images/footer/antam-background.png"
            alt="An tâm"
            className="w-32 h-32"
            width={1000}
            height={1000}
          />
          <FaCheck
            className="absolute text-white w-12 h-12 drop-shadow-lg"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
          />
        </div>
        <div className="text-2xl font-[800] bg-secondary-gradient-90 bg-clip-text text-transparent">
          AN TÂM
        </div>
        <div className="text-lg font-[600] text-white/80">Giá luôn tốt nhất</div>
      </div>
    </div>
  );
};

export default TopHighlight;
