import Button from '@/components/atoms/Button/Button';
import { SectionHeading } from '@/components/atoms/Heading';
import Star from '@/components/atoms/Star/Star';

import { cn } from '@/lib/utils';

interface ProductSummaryProps {
  className?: string;
}

const ProductSummary = ({ className }: ProductSummaryProps) => (
  <div className={cn('px-3 pb-5 text-[#2A2A40] mt-2 lg:mt-0  bg-white', className)}>
    <SectionHeading className="text-[#2A2A40] text-[25px]">
      Yến Chưng Tươi Nguyên Chất 100% Hộp 6 lọ x 70ml
    </SectionHeading>
    <div className="flex items-center py-2 border-b border-dashed border-[#DADADA]">
      <Star className="w-[20px] h-[20px]" />
      <Star className="w-[20px] h-[20px]" />
      <Star className="w-[20px] h-[20px]" />
      <Star className="w-[20px] h-[20px]" />
      <Star className="w-[20px] h-[20px]" />
      <p className="pl-4">(124 reviews) | Đã bán 12k</p>
    </div>
    <div className="flex items-center border-b border-dashed border-[#DADADA] py-2 text-[25px]">
      <SectionHeading>12.000.000đ</SectionHeading>
      <SectionHeading className="pl-4 font-light text-[20px] leading-[32px] line-through text-[#2A2A40]">
        12.000.000đ
      </SectionHeading>
    </div>
    <div className="border-b border-dashed border-[#DADADA] py-2">
      <b className="mr-1">Thành phần:</b>
      <span className="mr-1">
        12g yến vụ tươi nguyên nhân, đông trùng hạ thảo, nước tinh khiết.
      </span>
      <Button variant="text" className="text-[#0085E2] font-bold text-[18px]">
        Xem thêm
      </Button>
    </div>
    <div className="border-b border-dashed border-[#DADADA] py-2">
      <b>Size:</b>
      <Button variant="outline" className="px-[7px] py-[3px] border-[#D62C35] text-[#D62C35] ml-2">
        50 gram
      </Button>
      <Button variant="outline" className="px-[7px] py-[3px] border-[#2A2A40] ml-2">
        100 gram
      </Button>
      <Button variant="outline" className="px-[7px] py-[3px] border-[#2A2A40] ml-2">
        200 gram
      </Button>
    </div>
    <div className="border-b border-dashed border-[#DADADA] py-2">
      <b>Hương vị:</b>
      <Button variant="outline" className="px-[7px] py-[3px] border-[#D62C35] text-[#D62C35] ml-2">
        Đường phèn
      </Button>
      <Button variant="outline" className="px-[7px] py-[3px] border-[#2A2A40] ml-2">
        Hạt chia
      </Button>
      <Button variant="outline" className="px-[7px] py-[3px] border-[#2A2A40] ml-2">
        Hạt sen
      </Button>
    </div>
    <div className="py-2">
      <p>
        <b>Số lượng:</b>
      </p>
      <div className="mt-1">
        <Button variant="outline" className="px-4 text-[#2A2A40]">
          -
        </Button>
        <span className="px-3">2</span>
        <Button variant="outline" className="px-4 text-[#2A2A40]">
          +
        </Button>
        <b className="pl-4">Còn 5 sản phẩm</b>
      </div>
    </div>
    <div className="py-2 lg:grid lg:grid-cols-12 lg:gap-2">
      <Button variant="fill" className="w-full h-[46px] font-bold lg:col-span-6">
        Mua ngay
      </Button>
      <Button
        variant="outline"
        className="w-full h-[46px] font-bold border-[#2A2A40] text-[#2A2A40] mt-3 lg:col-span-6 lg:mt-0"
      >
        Thêm giỏ hàng
      </Button>
    </div>
    <div className="border rounded-[5px] border-dashed border-[#DADADA] p-4 mt-3">
      <div>
        <span>{/* Icon here */}</span>
        <div>
          <b className="leading-4">Giao hàng</b>
          <p className="leading-4">Miễn phí giao hàng cho đơn từ 100.000đ</p>
        </div>
      </div>
      <div className="mt-2">
        <span>{/* Icon here */}</span>
        <div>
          <b className="leading-4">Đổi trả</b>
          <p className="leading-4">Đổi trả miễn phí trong vòng 7 ngày</p>
        </div>
      </div>
      <div className="mt-2">
        <span>{/* Icon here */}</span>
        <div>
          <b className="leading-4">Bảo quản</b>
          <p className="leading-4">Bảo quản lạnh, uống trong vòng 12h</p>
        </div>
      </div>
    </div>
  </div>
);

export default ProductSummary;
