import React from 'react';

// Định nghĩa lại kiểu props theo yêu cầu mới
type DirectionControlProps = {
  onClick: () => void; // Hàm được gọi khi click vào điều khiển
  direction?: boolean; // false cho trái, true cho phải (mặc định là phải)
  className?: string; // Class tùy chọn cho button
};

export const DirectionControl = (props: DirectionControlProps) => {
  const ArrowIcon = (props: {
    width: number;
    height: number;
    fillColor: string;
    rotationClass?: string;
  }) => {
    return (
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 43 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.rotationClass}
      >
        <path
          d="M36.549 0.22876L35.6703 1.173L39.631 4.85542H0.109375V6.14448H39.6342L35.6703 9.82798L36.549 10.7722L42.2188 5.50103L36.549 0.22876Z"
          fill={props.fillColor}
        />
      </svg>
    );
  };

  // Xác định class xoay dựa trên prop 'direction'
  // Nếu direction là false (bên trái), áp dụng 'rotate-180'.
  // Nếu direction là true hoặc undefined (mặc định là bên phải), không áp dụng xoay.
  const rotationClass = props.direction === false ? 'rotate-180' : '';

  // Xác định nhãn cho khả năng tiếp cận dựa trên hướng
  const ariaLabel = props.direction === false ? 'Previous' : 'Next';

  const backgroundColorClass = props.direction ? 'bg-primary' : 'bg-white';
  const arrowFillColor = props.direction ? 'white' : '#5E6A7D';

  return (
    // Sử dụng phần tử button là phù hợp nhất về ngữ nghĩa cho một điều khiển có thể thao tác
    <button
      className={`w-16 h-10 flex items-center justify-center p-2 border border-dark ${backgroundColorClass} ${props.className || ''} hover:opacity-80`}
      onClick={props.onClick} // Gắn hàm xử lý click
      aria-label={ariaLabel} // Thêm nhãn cho khả năng tiếp cận
    >
      <ArrowIcon
        width={42} // Kích thước từ SVG gốc
        height={11} // Kích thước từ SVG gốc
        fillColor={arrowFillColor} // Truyền màu mũi tên đã xác định
        rotationClass={rotationClass} // Truyền class xoay
      />
    </button>
  );
};
