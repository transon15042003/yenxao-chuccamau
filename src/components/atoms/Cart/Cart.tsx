import Image from 'next/image';
import React from 'react'; // Đảm bảo React được import khi dùng JSX

type CartProps = {
  className?: string; // Class cho button bao ngoài (để tùy chỉnh thêm từ ngoài)
  size?: number; // Kích thước của icon giỏ hàng (width và height)
  count?: number; // Số lượng hiển thị trên badge
};

export const Cart = (props: CartProps) => {
  // Giá trị mặc định cho size và count nếu không được truyền vào
  const iconSize = props.size || 24;
  const itemCount = props.count || 0; // Mặc định số lượng là 0

  return (
    <button type="button" className={`${props.className || ''} relative p-1`}>
      <div className="relative inline-flex">
        <Image
          priority
          src="/icon_Shop.svg"
          height={iconSize}
          width={iconSize}
          alt="Shopping cart icon" // Alt text mô tả hơn
        />
        <div
          className="absolute top-0 right-0 -mt-2 -mr-2 size-5 rounded-full bg-yellow-400 text-gray-800 text-xs flex items-center justify-center p-1 min-w-5"
          style={{ fontSize: '0.65rem' }}
        >
          {itemCount}
        </div>
      </div>
    </button>
  );
};
