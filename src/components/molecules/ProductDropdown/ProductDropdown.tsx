import Link from 'next/link';
import React from 'react';

interface Product {
  name: string;
  link: string;
  comingSoon?: boolean;
}

const products: Product[][] = [
  [
    { name: 'Bánh tổ yến', comingSoon: true, link: '/products/banh-to-yen' },
    { name: 'Yến Chưng Tươi', link: '/products/yen-chung-tuoi' },
    { name: 'Set Quà Yến Chưng Tươi', comingSoon: true, link: '/products/set-qua-yen-chung-tuoi' },
    { name: 'Yến Chưng Sẵn Tiệt Trùng', link: '/products/yen-chung-san-tiet-trung' },
    { name: 'Cháo & Súp (Yến)', link: '/products/chao-sup-yen' }
  ],
  [
    { name: 'Yến Sào Tinh Chế', link: '/products/yen-sao-tinh-che' },
    { name: 'Tổ Yến Sào Thô', link: '/products/to-yen-sao-tho' },
    { name: 'Topping', link: '/products/topping' },
    { name: 'Món nên thử', link: '/products/mon-nen-thu' },
    { name: 'Khác', link: '/products/khac' }
  ]
];

interface ProductDropdownProps {
  open: boolean;
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const ProductDropdown = ({ open, isMobile = false, onLinkClick }: ProductDropdownProps) => {
  if (!open) return null;

  const displayProducts = isMobile ? products.flat() : products;

  return (
    <div
      className={`${
        isMobile
          ? 'mt-2 pl-4 flex flex-col gap-2'
          : 'absolute left-0 top-full mt-2 bg-[#a80d13] text-white rounded shadow-lg px-8 py-6 min-w-[600px] z-50 flex gap-16'
      }`}
    >
      {isMobile ? (
        <div className="flex flex-col gap-2">
          {(displayProducts as Product[]).map((item) => (
            <div key={item.name} className="relative flex items-start text-base">
              <div className="relative will-change-contents">
                <Link
                  href={item.link}
                  onClick={onLinkClick}
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#E6B522] hover:via-[#FFF788] hover:to-[#FFE059] transition-all duration-300"
                >
                  {item.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        (displayProducts as Product[][]).map((col, i) => (
          <div key={i} className="flex flex-col gap-4">
            {col.map((item) => (
              <div key={item.name} className="relative flex flex-col items-start text-lg">
                <div className="relative will-change-contents">
                  <Link
                    href={item.link}
                    onClick={onLinkClick}
                    className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#E6B522] hover:via-[#FFF788] hover:to-[#FFE059] transition-all duration-300"
                  >
                    {item.name}
                    {item.comingSoon && (
                      <span className="absolute -top-5 -right-12 bg-yellow-300 text-[#a80d13] text-xs font-semibold rounded px-2 py-0.5 whitespace-nowrap z-10">
                        Sắp ra mắt
                      </span>
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default ProductDropdown;
