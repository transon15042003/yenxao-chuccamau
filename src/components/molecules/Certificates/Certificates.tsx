import { HygieneSVG } from '@/svg/CertificateSVG/HygieneSVG';
import { NaturalSVG } from '@/svg/CertificateSVG/NaturalSVG';
import { QualitySVG } from '@/svg/CertificateSVG/QualitySVG';

import { Certificate } from '@/components/atoms/Certificate';

export const Certificates = () => (
  <div
    data-testid="certificates-container"
    className="flex md:flex-row flex-col justify-center items-center"
  >
    <Certificate
      SvgIconComponent={<QualitySVG className="w-32 h-32 mb-12" />}
      title="Chất Lượng"
      subTitle="Sản phẩm được kiểm định chất lượng nghiêm ngặt, đảm bảo an toàn"
    />
    <Certificate
      SvgIconComponent={<HygieneSVG className="w-32 h-32 mb-12" />}
      title="Vệ Sinh"
      subTitle="Quy trình sản xuất đạt tiêu chuẩn vệ sinh an toàn thực phẩm"
    />
    <Certificate
      SvgIconComponent={<NaturalSVG className="w-32 h-32 mb-12" />}
      title="Tự Nhiên"
      subTitle="Nguyên liệu tự nhiên, không chất bảo quản, phụ gia độc hại"
    />
  </div>
);
