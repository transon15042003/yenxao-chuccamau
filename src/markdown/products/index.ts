import ChanThoMieng from './chan-tho-mieng_delete.mdx';
import ChanYenTho from './chan-tho-ria.mdx';
import ChanYenRutLong from './chan-yen-rut-long.mdx';
import ChaoGa from './chao-ga-yen-tuoi.mdx';
import HatChia from './hat-chia.mdx';
import HatSen from './hat-sen.mdx';
import HongDangSamMat from './hong-dang-sam-mat_delete.mdx';
import KiTu from './ki-tu.mdx';
import NhanNhuc from './nhan-nhuc.mdx';
import Saffron from './saffron.mdx';
import SetQua4Chai from './set-qua-4-chai.mdx';
import SetQua8Chai from './set-qua-8-chai.mdx';
import TaoBuiNhuocKhuong from './tao-bui-nhuoc-khuong_delete.mdx';
import TaoDo from './tao-do.mdx';
import ToYenSoiTinhCaoCap from './to-yen-soi-tinh-cao-cap.mdx';
import ToYenThoLoai1 from './to-yen-tho-loai-1.mdx';
import ToYenThoLoai2 from './to-yen-tho-loai-2.mdx';
import ToYenTinhCheLoai1 from './to-yen-tinh-che-loai-1.mdx';
import ToYenTinhCheLoai2 from './to-yen-tinh-che-loai-2.mdx';
import ToYenTinhCheSoiNon from './to-yen-tinh-che-soi-non.mdx';
import ToYenTinhCheVun from './to-yen-tinh-che-vun.mdx';
import VienYenBaby from './vien-yen-baby.mdx';
import YenSoiDaiChungTuoi from './yen-soi-dai-chung-tuoi.mdx';
import YenSoiNonChungTuoi from './yen-soi-non-chung-tuoi.mdx';
import YenVunChungTuoi from './yen-vun-chung-tuoi.mdx';

const productMarkdown = {
  'yen-vun-chung-tuoi': YenVunChungTuoi,
  'yen-soi-non-chung-tuoi': YenSoiNonChungTuoi,
  'yen-soi-dai-chung-tuoi': YenSoiDaiChungTuoi,
  'vien-yen-baby': VienYenBaby,
  'to-yen-tinh-che-vun': ToYenTinhCheVun,
  'to-yen-tinh-che-soi-non': ToYenTinhCheSoiNon,
  'to-yen-tinh-che-loai-2': ToYenTinhCheLoai2,
  'to-yen-tinh-che-loai-1': ToYenTinhCheLoai1,
  'to-yen-tho-loai-1': ToYenThoLoai1,
  'to-yen-tho-loai-2': ToYenThoLoai2,
  'to-yen-soi-tinh-cao-cap': ToYenSoiTinhCaoCap,
  'tao-do': TaoDo,
  'tao-bui-nhuoc-khuong': TaoBuiNhuocKhuong,
  'set-qua-8-chai': SetQua8Chai,
  'set-qua-4-chai': SetQua4Chai,
  saffron: Saffron,
  'nhan-nhuc': NhanNhuc,
  'ki-tu': KiTu,
  'hong-dang-sam-mat': HongDangSamMat,
  'hat-sen': HatSen,
  'hat-chia': HatChia,
  'chao-ga-yen-tuoi': ChaoGa,
  'chan-yen-rut-long': ChanYenRutLong,
  'chan-yen-tho': ChanYenTho,
  'chan-tho-mieng': ChanThoMieng
};

export const getProductMarkdown = (slug: string) => {
  const markdown = productMarkdown[slug as keyof typeof productMarkdown];

  return markdown || null;
};
