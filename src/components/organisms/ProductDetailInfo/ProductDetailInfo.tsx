import Button from '@/components/atoms/Button/Button';
import { SectionHeading } from '@/components/atoms/Heading';

import { cn } from '@/lib/utils';

const productComponents: { [key: string]: string } = {
  'Yến vụn tươi (15g):': 'Cung cấp protein, collagen tự nhiên và axit amin thiết yếu.',
  'Đường phèn:': 'Tạo vị ngọt thanh, không gắt, dễ tiêu hóa và ít gây tăng cân.',
  'Nước tinh khiết:': 'Dùng trong quá trình chưng cách thủy để giữ nguyên dưỡng chất.'
};

interface ProductDetailInfoProps {
  className?: string;
}

const ProductDetail = ({ className }: ProductDetailInfoProps) => (
  <div
    className={cn('relative px-3 py-6 h-[700px] overflow-hidden my-[10px]  bg-white', className)}
  >
    <SectionHeading className="text-[#2A2A40] text-[30px]">Chi tiết sản phẩm</SectionHeading>
    <div className="h-[4px] bg-[#2A2A40] my-2" />
    <SectionHeading className="text-[#2A2A40] text-[30px]">Yến Vụn Chưng Tươi </SectionHeading>
    <div className="text-[#2A2A40] text-[18px]">
      <div>
        <b className="block mt-3"> Thành phần chính</b>
        <ul className="list-disc ml-[18px]">
          {Object.entries(productComponents).map(([key, val]) => (
            <li key={key}>
              <b>{key}</b>
              <span className="ml-1">{val}</span>
            </li>
          ))}
        </ul>
        <i>Không chứa chất bảo quản, hương liệu nhân tạo hay chất tạo màu.</i>
        <br />
        <b className="block mt-3">Phân loại :</b>
        <span> đường phèn, hạt chia, hạt sen, lá dứa</span> <br />
        <b className="block mt-3">Chi tiết :</b>
        <ul className="list-disc">
          <li className="ml-[18px] mt-2">
            <b>Đặc điểm nổi bật</b>
          </li>
          <li className="list-none">
            <b>Dung tích nhỏ gọn (75ml):</b>
            <span className="ml-1">
              Tiện lợi mang theo và sử dụng ngay, phù hợp với người bận rộn.
            </span>
          </li>
          <li className="list-none">
            <b>Lọ thủy tinh cao cấp:</b>
            <span className="ml-1">Giúp bảo quản tốt, giữ nguyên dưỡng chất và hương vị.</span>
          </li>
          <li className="list-none">
            <b>Sản phẩm tươi, không chất bảo quản:</b>
            <span className="ml-1">Đảm bảo an toàn cho mọi lứa tuổi, kể cả trẻ em.</span>
          </li>
          <li className="ml-[18px] mt-2">
            <b>Công dụng nổi bật</b>
          </li>
          <li className="list-none">
            <b>Bổ sung dưỡng chất:</b>
            <span className="ml-1">
              Giúp phục hồi cơ thể, tăng cường sức khỏe, cải thiện thể trạng.
            </span>
          </li>
          <li className="list-none">
            <b>Làm đẹp da, giữ dáng: </b>
            <span className="ml-1">
              Collagen tự nhiên hỗ trợ làm căng mịn da và duy trì vóc dáng.
            </span>
          </li>
          <li className="list-none">
            <b>Tăng đề kháng:</b>
            <span className="ml-1">Các axit amin trong yến giúp nâng cao hệ miễn dịch.</span>
          </li>
          <li className="list-none">
            <b>Hỗ trợ tiêu hóa:</b>
            <span className="ml-1">
              Dễ hấp thụ, tốt cho người có hệ tiêu hóa yếu hoặc đang dưỡng bệnh.
            </span>
          </li>
          <li className="ml-[18px] mt-2">
            <b>Đối tượng sử dụng</b>
          </li>
          <li className="list-none">
            <b>Người lớn tuổi</b>
            <span className="ml-1">cần bồi bổ</span>
          </li>
          <li className="list-none">
            <b>Phụ nữ </b>
            <span className="ml-1">muốn làm đẹp, giữ dáng</span>
          </li>
          <li className="list-none">
            <b>Người mới ốm dậy </b>
            <span className="ml-1">hoặc cần phục hồi sức khỏe</span>
          </li>
          <li className="list-none">
            <b>Trẻ em </b>
            <span className="ml-1">trên 12 tháng tuổi</span>
          </li>
          <li className="list-none">
            <b>Mẹ bầu </b>
            <span className="ml-1">và sau sinh (từ sau tháng thứ 3 thai kỳ)</span>
          </li>
          <li className="ml-[18px] mt-2">
            <b>Hướng dẫn sử dụng</b>
          </li>
          <li className="list-none">
            <b>Lắc đều trước khi dùng </b>
            <span className="ml-1">để hòa quyện dưỡng chất.</span>
          </li>
          <li className="list-none">
            <b>Có thể dùng trực tiếp sau khi lấy ra khỏi tủ lạnh.</b>
          </li>
          <li className="list-none">
            <b>Dùng vào các thời điểm lý tưởng:</b>
            <span className="ml-1">Buổi sáng, bữa phụ, trước khi ngủ</span>
          </li>
          <li className="ml-[18px] mt-2">
            <b>Hướng dẫn bảo quản</b>
          </li>
          <li className="list-none">
            <span className="ml-1">Bảo quản trong </span>
            <b>ngăn mát tủ lạnh </b>
          </li>
          <li className="list-none">
            <span className="ml-1">Dùng trong vòng </span>
            <b>3–5 ngày sau khi mở nắp</b>
          </li>
          <li className="list-none">
            <b>Tránh ánh nắng trực tiếp,</b>
            <span className="ml-1">nơi có nhiệt độ cao</span>
          </li>
        </ul>
      </div>
    </div>
    <Button
      variant="text"
      className="w-full h-[200px] text-[#D93434] font-bold underline absolute bottom-0 [background-image:linear-gradient(to_top,white_40%,transparent_100%)]"
    >
      <span className="absolute bottom-[20%] left-1/2 -translate-x-1/2 underline">Xem thêm</span>
    </Button>
  </div>
);

export default ProductDetail;
