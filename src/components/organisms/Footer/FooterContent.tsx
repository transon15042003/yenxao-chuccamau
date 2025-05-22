import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
// import { AppConfig } from 'src/AppConfig';

interface MenuItem {
  href: string;
  label: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <div className="flex-1 flex flex-col items-start px-0 md:pl-6">
      <div className="font-[900] text-[16px] mb-5 bg-secondary-gradient-90 bg-clip-text text-transparent">
        {title}
      </div>
      <ul className="space-y-4 text-sm">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              className="font-[400] text-[16px] hover:text-secondary transition-colors"
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const menuItems: MenuItem[] = [
  { href: '/', label: 'Trang chủ' },
  { href: '/about', label: 'Giới thiệu' },
  { href: '/products', label: 'Sản phẩm' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Liên hệ' }
];

const policyItems: MenuItem[] = [
  { href: '/privacy-policy', label: 'Chính sách bảo mật' },
  { href: '/return-policy', label: 'Chính sách đổi trả hàng' },
  { href: '/order-policy', label: 'Chính sách đặt hàng' },
  { href: '/shipping-policy', label: 'Chính sách vận chuyển' }
];

const FooterContent = () => {
  return (
    <>
      <div className="text-[#DBDBDB] relative z-10 w-5/6 mx-auto py-2 md:py-10 flex flex-col md:flex-row justify-between divide-y divide-secondary/30 md:divide-y-0">
        {/* Logo + Địa chỉ */}
        <div className="flex-1 w-full md:w-1/4 flex flex-col gap-2 md:gap-5 pt-2 pb-8 md:py-0 md:px-6">
          <Image
            src="/logo-light.webp"
            alt="Chúc Cà Mau"
            className="w-40 mb-2"
            width={1000}
            height={1000}
          />
          <div className="flex items-start gap-2 text-sm">
            <MapPinIcon className="w-5 h-5 flex-shrink-0" />
            <a
              href="https://maps.app.goo.gl/sDUyNeb4u12ArZcM9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh
            </a>
          </div>
          <div className="flex items-start gap-2 text-sm text-left w-full">
            <PhoneIcon className="w-5 h-5 flex-shrink-0" />
            <a href="tel:02838221234" className="hover:underline">
              (028) 3822 1234
            </a>
          </div>
        </div>

        {/* Menu + Chính sách container */}
        <div className="py-10 md:py-0 w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-row">
            <MenuSection title="MENU" items={menuItems} />
            <MenuSection title="CHÍNH SÁCH" items={policyItems} />
          </div>
        </div>

        {/* Chứng nhận + Mạng xã hội */}
        <div className="flex-1 min-w-[180px] flex flex-col items-start pt-8 md:py-0 md:px-6 gap-4">
          <div className="font-[900] text-[16px] bg-secondary-gradient-90 bg-clip-text text-transparent">
            CHỨNG NHẬN
          </div>
          <div className="flex flex-row gap-2 items-center w-full pb-2 md:justify-start md:flex-col md:items-start md:gap-4">
            <Image
              width={220}
              height={220}
              src="/images/footer/dathongbao.png"
              alt="Đã thông báo Bộ Công Thương"
            />
            <Image
              width={220}
              height={220}
              src="/images/footer/certificate.png"
              alt="Các loại giấy chứng nhận"
            />
          </div>
          <hr className="w-full border-secondary/30" />
          <div className="w-full flex flex-col items-start gap-2 items-center md:items-start">
            <p className="text-lg font-bold">Theo dõi chúng tôi</p>
            <div className="flex flex-row flex-wrap gap-2 items-center">
              <Link href="#" aria-label="Facebook" className="hover:opacity-80">
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:opacity-80">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:opacity-80">
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link href="#" aria-label="TikTok" className="hover:opacity-80">
                <FaTiktok className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <hr className="w-full border-secondary/30 my-4 md:hidden" />
        </div>
      </div>

      <div className="text-center pb-6 text-sm font-[400] relative z-10">
        © Copyright 2025, All Rights Reserved by Techbee
      </div>
    </>
  );
};

export default FooterContent;
