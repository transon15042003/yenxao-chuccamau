import { Certificate } from '@/components/atoms/Certificate';

export const Certificates = () => (
  <div
    data-testid="certificates-container"
    className="flex md:flex-row flex-col justify-center items-center"
  >
    <Certificate
      certificateSrc="certificates/Group 8245.svg"
      title="Chất Lượng"
      subTitle="Sản phẩm được kiểm định chất lượng nghiêm ngặt, đảm bảo an toàn"
    />
    <Certificate
      certificateSrc="certificates/Group 8246.svg"
      title="Vệ Sinh"
      subTitle="Quy trình sản xuất đạt tiêu chuẩn vệ sinh an toàn thực phẩm"
    />
    <Certificate
      certificateSrc="certificates/Group.svg"
      title="Tự Nhiên"
      subTitle="Nguyên liệu tự nhiên, không chất bảo quản, phụ gia độc hại"
    />
  </div>
);
