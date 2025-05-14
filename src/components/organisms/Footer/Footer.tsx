import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaThumbsUp, FaCheck } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full text-white bg-primary-dark-gradient-360 relative overflow-hidden">
      {/* Top highlight section */}
      <div className="relative overflow-hidden z-10 max-w-5xl mx-auto mt-6 mb-6 rounded-2xl border-2 border-secondary relative overflow-hidden z-10 max-w-5xl mx-auto mt-6 mb-6 rounded-2xl border-2 border-secondary flex flex-col gap-8 px-2 py-6 md:flex-row md:justify-between md:items-center md:px-6 md:py-8 md:gap-8">
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
          <div className="absolute inset-0 w-full h-full rounded-2xl bg-primary/80" />
        </div>

        <div className="flex flex-col items-center flex-1 z-10 mb-8 md:mb-0">
          <Image
            src="/images/footer/chinhhang-background.png"
            alt="Chính hãng"
            className="w-20 h-20 mb-2 md:w-25 md:h-25"
            width={1000}
            height={1000}
          />
          <div className="text-lg md:text-xl font-bold bg-secondary-gradient-90 bg-clip-text text-transparent">
            CHÍNH HÃNG
          </div>
          <div className="text-xs md:text-sm text-white/80">Không hàng giả</div>
        </div>

        <div className="flex flex-col items-center flex-1 z-10 mb-8 md:mb-0">
          <div className="relative w-16 h-16 mb-2 md:w-20 md:h-20 flex items-center justify-center">
            <Image
              src="/images/footer/camket-background.png"
              alt="Cam kết"
              className="w-16 h-16 md:w-20 md:h-20"
              width={1000}
              height={1000}
            />
            <FaThumbsUp
              className="absolute text-white w-5 h-5 md:w-6 md:h-6 drop-shadow-lg"
              style={{ left: '50%', top: '40%', transform: 'translate(-50%, -50%)' }}
            />
          </div>
          <div className="text-lg md:text-xl font-bold bg-secondary-gradient-90 bg-clip-text text-transparent">
            CAM KẾT
          </div>
          <div className="text-xs md:text-sm text-white/80">Phục vụ tận tâm</div>
        </div>

        <div className="flex flex-col items-center flex-1 z-10">
          <div className="relative w-16 h-16 mb-2 md:w-20 md:h-20 flex items-center justify-center">
            <Image
              src="/images/footer/antam-background.png"
              alt="An tâm"
              className="w-16 h-16 md:w-20 md:h-20"
              width={1000}
              height={1000}
            />
            <FaCheck
              className="absolute text-white w-6 h-6 md:w-8 md:h-8 drop-shadow-lg"
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            />
          </div>
          <div className="text-lg md:text-xl font-bold bg-secondary-gradient-90 bg-clip-text text-transparent">
            AN TÂM
          </div>
          <div className="text-xs md:text-sm text-white/80">Giá luôn tốt nhất</div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 px-2 md:px-6 md:pb-8">
        <div className="flex-1 min-w-[220px] flex flex-col gap-4 mb-8 md:mb-0 items-start">
          <Image
            src="/logo-light.webp"
            alt="Chúc Cà Mau"
            className="w-40 mb-2 mx-auto"
            width={1000}
            height={1000}
          />
          <div className="flex items-start gap-2 text-sm">
            <MapPinIcon className="w-5 h-5 text-white/80 flex-shrink-0" />
            123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh
          </div>
          <div className="flex items-start gap-2 text-sm text-left w-full">
            <PhoneIcon className="w-5 h-5 text-white/80 flex-shrink-0" />
            (028) 3822 1234
          </div>
        </div>

        <div className="flex flex-row w-full gap-4 mb-8 pl-4 md:flex-1 md:w-auto md:gap-10 md:mb-0 md:pl-0">
          <div className="flex-1 min-w-[120px]">
            <div className="font-bold mb-5 bg-secondary-gradient-90 bg-clip-text text-transparent">
              MENU
            </div>
            <ul className="space-y-4 text-sm ">
              <li className="text-white/80">
                <Link href="/">Trang chủ</Link>
              </li>
              <li className="text-white/80">
                <Link href="/about">Giới thiệu</Link>
              </li>
              <li className="text-white/80">
                <Link href="/products">Sản phẩm</Link>
              </li>
              <li className="text-white/80">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="text-white/80">
                <Link href="/contact">Liên hệ</Link>
              </li>
            </ul>
          </div>

          <div className="flex-1 min-w-[150px]">
            <div className="font-bold mb-5 bg-secondary-gradient-90 bg-clip-text text-transparent">
              CHÍNH SÁCH
            </div>
            <ul className="space-y-4 text-sm">
              <li className="text-white/80">
                <Link href="/">Chính sách bảo mật</Link>
              </li>
              <li className="text-white/80">
                <Link href="/">Chính sách đổi trả hàng</Link>
              </li>
              <li className="text-white/80">
                <Link href="/">Chính sách đặt hàng</Link>
              </li>
              <li className="text-white/80">
                <Link href="/">Chính sách vận chuyển</Link>
              </li>
              <li className="text-white/80">
                <Link href="/">Điều khoản sử dụng</Link>
              </li>
              <li className="text-white/80">
                <Link href="/">Chính sách bảo hành</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 flex flex-col py-4 md:py-0 gap-4 items-center md:items-start border-t border-b border-secondary/20 divide-y divide-secondary/20 md:divide-y-0 md:border-none">
          <div className="w-full flex flex-col gap-4 items-center md:items-start py-2 md:py-0 md:border-b border-secondary/20 md:pb-4">
            <div className="font-bold bg-secondary-gradient-90 bg-clip-text text-transparent">
              CHỨNG NHẬN
            </div>
            <div className="flex flex-row gap-2 items-center w-full pb-2 justify-center md:justify-start md:flex-col md:items-start md:gap-4">
              <Image
                width={200}
                height={200}
                src="/images/footer/dathongbao.png"
                alt="Đã thông báo Bộ Công Thương"
              />
              <Image
                width={200}
                height={200}
                src="/images/footer/certificate.png"
                alt="Các loại giấy chứng nhận"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center py-4 md:items-start gap-2 md:py-0">
            <p className="text-sm text-white/80">Theo dõi chúng tôi</p>
            <div className="flex flex-row flex-wrap gap-2 items-center">
              <Link href="#" aria-label="Facebook" className="hover:opacity-80">
                <FaFacebook className="w-5 h-5 text-white/80" />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:opacity-80">
                <FaInstagram className="w-5 h-5 text-white/80" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:opacity-80">
                <FaLinkedin className="w-5 h-5 text-white/80" />
              </Link>
              <Link href="#" aria-label="TikTok" className="hover:opacity-80">
                <FaTiktok className="w-5 h-5 text-white/80" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 text-sm text-white/80 relative z-10">
        © Copyright 2025, All Rights Reserved by Techbee
      </div>
      {/* Decorative background */}
      <Image
        src="/images/footer/footer-background.png"
        alt="footer background"
        className="absolute w-full bottom-0 left-0 opacity-0 md:opacity-20 z-0 pointer-events-none"
        width={1000}
        height={1000}
      />
    </footer>
  );
};

export default Footer;
