import { getBlogBySlug } from 'src/services/blog.service';
import { getProductBySlug } from 'src/services/product.service';

interface SEOContentType {
  title: string;
  desc: string;
  keywords: string[];
  canonicalUrl: string;
}

export const StaticSEOContent: Record<string, SEOContentType> = {
  homePage: {
    title: 'Yến Sào Chúc Cà Mau – Nguyên Chất, An Toàn, Dinh Dưỡng Vượt Trội',
    desc: 'Chúc Cà Mau chuyên cung cấp yến sào nguyên chất, không chất bảo quản, đạt chuẩn an toàn thực phẩm. Sản phẩm đa dạng: cháo yến tươi, set quà yến cao cấp, combo khuyến mãi hấp dẫn. Cam kết chất lượng và giá trị dinh dưỡng tối ưu.',
    keywords: [
      'Chúc Cà Mau',
      'yến sào Chúc Cà Mau',
      'yến sào nguyên chất',
      'cháo yến tươi',
      'mua yến sào',
      'set quà yến',
      'tổ yến thật',
      'yến chất lượng cao',
      'yến an toàn',
      'yến sạch',
      'yến sào khuyến mãi'
    ],
    canonicalUrl: 'https://test.chuccamau.com/'
  },
  introductionPage: {
    title: 'Chúc Cà Mau – Hành Trình Xây Dựng Thương Hiệu Yến Sào Uy Tín & Bền Vững',
    desc: 'Tìm hiểu câu chuyện thương hiệu Chúc Cà Mau từ những ngày đầu thành lập đến hiện tại. Cam kết chất lượng, đổi mới và phát triển bền vững là nền tảng tạo nên uy tín với khách hàng trong và ngoài nước.',
    keywords: [
      'Chúc Cà Mau',
      'giới thiệu Chúc Cà Mau',
      'câu chuyện thương hiệu yến',
      'quy trình sản xuất yến',
      'giá trị cốt lõi',
      'sứ mệnh tầm nhìn Chúc Cà Mau',
      'thương hiệu yến sào uy tín',
      'nhà cung cấp yến chất lượng',
      'phát triển bền vững',
      'kiểm định chất lượng yến',
      'chứng nhận sản phẩm yến'
    ],
    canonicalUrl: 'https://test.chuccamau.com/about'
  },
  productsPage: {
    title: 'Sản Phẩm Yến Sào Chúc Cà Mau – Đa Dạng, Chất Lượng, Dinh Dưỡng',
    desc: 'Khám phá danh mục sản phẩm yến sào Chúc Cà Mau với đầy đủ lựa chọn: yến chưng tươi, set quà yến cao cấp, cháo & soup yến, tổ yến thô, yến tinh chế và topping đi kèm. Tất cả đều đạt chuẩn chất lượng, an toàn và bổ dưỡng cho sức khỏe.',
    keywords: [
      'danh mục sản phẩm yến',
      'yến chưng tươi',
      'set quà yến',
      'cháo yến',
      'soup yến',
      'tổ yến thô',
      'yến sào tinh chế',
      'topping ăn kèm yến',
      'sản phẩm yến sào Chúc Cà Mau',
      'mua yến chưng',
      'quà tặng yến sào',
      'yến cho sức khỏe'
    ],
    canonicalUrl: 'https://test.chuccamau.com/products'
  },
  blogsPage: {
    title: 'Blog Chúc Cà Mau – Kiến Thức & Bí Quyết Sử Dụng Yến Sào Hiệu Quả',
    desc: 'Khám phá các bài viết chia sẻ kiến thức, bí quyết chọn mua, bảo quản và sử dụng yến sào chuẩn chất lượng từ Chúc Cà Mau. Cập nhật tin tức, hướng dẫn chăm sóc sức khỏe với yến tự nhiên.',
    keywords: [
      'blog yến sào',
      'kiến thức yến sào',
      'cách dùng yến sào',
      'bảo quản yến sào',
      'yến sào Chúc Cà Mau',
      'hướng dẫn sử dụng yến',
      'mẹo chọn yến thật'
    ],
    canonicalUrl: 'https://test.chuccamau.com/blog'
  },
  contactPage: {
    title: 'Liên Hệ Chúc Cà Mau – Hỗ Trợ Khách Hàng & Tư Vấn Sản Phẩm Yến Sào',
    desc: 'Liên hệ ngay với Chúc Cà Mau để được tư vấn sản phẩm yến sào chất lượng, giải đáp thắc mắc và hỗ trợ dịch vụ nhanh chóng. Đội ngũ chuyên nghiệp, tận tâm luôn sẵn sàng phục vụ bạn.',
    keywords: [
      'liên hệ Chúc Cà Mau',
      'tư vấn yến sào',
      'hỗ trợ khách hàng yến sào',
      'số điện thoại Chúc Cà Mau',
      'email Chúc Cà Mau',
      'địa chỉ cửa hàng yến sào',
      'đặt hàng yến sào',
      'chăm sóc khách hàng yến sào'
    ],
    canonicalUrl: 'https://test.chuccamau.com/contact'
  },
  orderPage: {
    title: 'Đặt Hàng Yến Sào Chúc Cà Mau – Nhanh Chóng, An Toàn, Tiện Lợi',
    desc: 'Đặt hàng yến sào Chúc Cà Mau dễ dàng và nhanh chóng với quy trình an toàn, hỗ trợ tận tâm. Giao hàng tận nơi, đảm bảo chất lượng và tiện lợi.',
    keywords: [
      'đặt hàng yến sào',
      'mua yến chưng tươi',
      'đặt mua set quà yến',
      'đặt hàng trực tuyến',
      'Chúc Cà Mau',
      'mua yến sào',
      'đặt hàng yến sào an toàn',
      'đặt hàng yến'
    ],
    canonicalUrl: 'https://test.chuccamau.com/order'
  },
  deliveryPolicyPage: {
    title: 'Chính Sách Vận Chuyển Chúc Cà Mau – Nhanh Chóng & An Toàn',
    desc: 'Tìm hiểu chính sách giao hàng của Chúc Cà Mau: thời gian giao nhận, phí vận chuyển, phạm vi giao hàng và quy trình đảm bảo sản phẩm yến sào đến tay khách hàng an toàn, đúng hẹn.',
    keywords: [
      'chính sách giao hàng',
      'giao hàng yến sào',
      'vận chuyển yến sào',
      'phí giao hàng',
      'thời gian giao hàng',
      'giao hàng nhanh',
      'giao hàng an toàn'
    ],
    canonicalUrl: 'https://test.chuccamau.com/shipping-policy'
  },
  paymentPolicyPage: {
    title: 'Chính Sách Thanh Toán Chúc Cà Mau – An Toàn & Tiện Lợi',
    desc: 'Chúc Cà Mau cung cấp nhiều phương thức thanh toán an toàn, tiện lợi như chuyển khoản, thanh toán khi nhận hàng (COD), thẻ ngân hàng,... Đảm bảo quy trình thanh toán nhanh chóng và bảo mật thông tin khách hàng.',
    keywords: [
      'chính sách thanh toán',
      'thanh toán yến sào',
      'thanh toán COD',
      'chuyển khoản mua yến',
      'thanh toán online',
      'phương thức thanh toán',
      'bảo mật thanh toán'
    ],
    canonicalUrl: 'https://test.chuccamau.com/payment-policy'
  },
  privacyPolicyPage: {
    title: 'Chính Sách Bảo Mật Thông Tin Khách Hàng – Chúc Cà Mau',
    desc: 'Chúc Cà Mau cam kết bảo mật tuyệt đối thông tin cá nhân và dữ liệu khách hàng. Tìm hiểu cách chúng tôi thu thập, sử dụng và bảo vệ thông tin theo quy định pháp luật và tiêu chuẩn bảo mật.',
    keywords: [
      'chính sách bảo mật',
      'bảo mật thông tin',
      'bảo vệ dữ liệu khách hàng',
      'bảo mật yến sào',
      'bảo mật thông tin cá nhân',
      'quyền riêng tư khách hàng'
    ],
    canonicalUrl: 'https://test.chuccamau.com/privacy-policy'
  },
  returnPolicyPage: {
    title: 'Chính Sách Kiểm Tra & Đổi Trả Hàng Chúc Cà Mau – Minh Bạch & Nhanh Chóng',
    desc: 'Chính sách kiểm tra và đổi trả hàng tại Chúc Cà Mau giúp khách hàng yên tâm mua sắm với quy trình đơn giản, nhanh gọn khi sản phẩm yến sào không đạt chất lượng hoặc có lỗi từ nhà sản xuất.',
    keywords: [
      'chính sách đổi trả',
      'kiểm tra hàng yến sào',
      'đổi trả sản phẩm',
      'bảo hành yến sào',
      'quy trình đổi trả',
      'đổi hàng lỗi',
      'hoàn tiền yến sào'
    ],
    canonicalUrl: 'https://test.chuccamau.com/return-policy'
  }
};

export const dynamicProductCateContent: Record<string, SEOContentType> = {
  'yen-chung-tuoi': {
    title: 'Yến Chưng Tươi Chúc Cà Mau – Nguyên Chất, Tiện Lợi, Bổ Dưỡng Mỗi Ngày',
    desc: 'Khám phá các sản phẩm yến chưng tươi Chúc Cà Mau – chế biến từ tổ yến nguyên chất, không chất bảo quản, đóng chai tiện lợi, giàu dưỡng chất. Lựa chọn hoàn hảo cho sức khỏe mỗi ngày, phù hợp biếu tặng và sử dụng gia đình.',
    keywords: [
      'yến chưng tươi',
      'yến chưng tươi Chúc Cà Mau',
      'yến chưng nguyên chất',
      'yến tươi ăn liền',
      'yến chưng đóng chai',
      'mua yến chưng',
      'yến sào tiện lợi',
      'yến tươi bổ dưỡng',
      'quà tặng yến chưng',
      'yến chưng tốt cho sức khỏe'
    ],
    canonicalUrl: 'https://test.chuccamau.com/products?c=yen-chung-tuoi'
  },
  'set-qua-yen-chung-tuoi': {
    title: 'Set Quà Yến Chưng Tươi Chúc Cà Mau – Quà Tặng Sức Khỏe Sang Trọng & Ý Nghĩa',
    desc: 'Set quà yến chưng tươi Chúc Cà Mau – món quà biếu cao cấp, tinh tế, giàu dinh dưỡng từ yến nguyên chất. Thiết kế sang trọng, phù hợp tặng đối tác, người thân, dịp lễ Tết, sinh nhật, thăm bệnh và tri ân khách hàng.',
    keywords: [
      'set quà yến chưng tươi',
      'quà tặng yến sào cao cấp',
      'yến chưng biếu tặng',
      'hộp quà yến tươi',
      'set quà sức khỏe',
      'quà tặng tổ yến',
      'quà yến sang trọng',
      'yến chưng Chúc Cà Mau',
      'quà yến lễ tết',
      'quà biếu yến cho người thân'
    ],
    canonicalUrl: 'https://test.chuccamau.com/products?c=set-qua-yen-chung-tuoi'
  },
  'chao-sup-yen': {
    title: 'Cháo Yến & Soup Yến Chúc Cà Mau – Dinh Dưỡng Tiện Lợi Cho Mọi Nhà',
    desc: 'Khám phá các món cháo yến và soup yến từ Chúc Cà Mau – chế biến từ yến nguyên chất, kết hợp cùng các nguyên liệu bổ dưỡng như hải sản, rau củ... Dễ ăn, tiện lợi, tốt cho người bệnh, trẻ nhỏ và người bận rộn.',
    keywords: [
      'cháo yến chưng',
      'soup yến sào',
      'cháo yến tươi',
      'cháo yến cho bé',
      'soup yến dinh dưỡng',
      'cháo yến ăn liền',
      'cháo tổ yến Chúc Cà Mau',
      'cháo yến hải sản',
      'cháo yến tiện lợi',
      'cháo yến phục hồi sức khỏe'
    ],
    canonicalUrl: 'https://test.chuccamau.com/products?c=chao-sup-yen'
  },
  'yen-sao-tinh-che': {
    title: 'Yến Sào Tinh Chế Chúc Cà Mau – Sạch Lông, Dễ Chế Biến, Dinh Dưỡng Nguyên Vẹn',
    desc: 'Yến sào tinh chế Chúc Cà Mau được làm sạch lông 100%, giữ nguyên sợi, không chất tẩy, giúp tiết kiệm thời gian chế biến. Sản phẩm cao cấp, giàu dưỡng chất, phù hợp sử dụng và làm quà tặng sức khỏe ý nghĩa.',
    keywords: [
      'yến sào tinh chế',
      'tổ yến tinh chế',
      'yến tinh chế Chúc Cà Mau',
      'yến đã làm sạch',
      'yến sạch lông',
      'tổ yến nguyên chất',
      'yến sào tiện lợi',
      'mua yến tinh chế'
    ],
    canonicalUrl: 'https://test.chuccamau.com/products?c=yen-sao-tinh-che'
  },
  'yen-sao-tho': {
    title: 'Tổ Yến Sào Thô Chúc Cà Mau – Nguyên Bản, Tinh Khiết, Dinh Dưỡng Cao Nhất',
    desc: 'Tổ yến sào thô Chúc Cà Mau là sản phẩm nguyên tổ chưa qua tinh chế, giữ trọn hương vị tự nhiên và hàm lượng dưỡng chất cao. Phù hợp cho người muốn tự tay sơ chế, đảm bảo chất lượng nguyên bản từ thiên nhiên.',
    keywords: [
      'tổ yến thô',
      'yến sào thô nguyên tổ',
      'yến thô Chúc Cà Mau',
      'yến chưa tinh chế',
      'tổ yến nguyên bản',
      'cách làm sạch tổ yến',
      'yến thô chất lượng cao',
      'tổ yến tự nhiên',
      'tổ yến nhà',
      'mua yến sào thô'
    ],
    canonicalUrl: 'https://test.chuccamau.com/products?c=yen-sao-tho'
  },
  toppping: {
    title: 'Topping Chúc Cà Mau – Bổ Sung Hương Vị & Dinh Dưỡng ',
    desc: 'Khám phá các loại topping kết hợp với yến như táo đỏ, hạt sen, nhãn nhục, saffron, kỷ tử... từ Chúc Cà Mau. Giúp món yến thêm ngon miệng, đa dạng và tăng cường giá trị dinh dưỡng.',
    keywords: [
      'topping ăn kèm với yến',
      'táo đỏ chưng yến',
      'hạt sen',
      'saffron',
      'kỷ tử',
      'nhãn nhục',
      'nguyên liệu chưng yến',
      'gia vị chưng yến',
      'mua topping chưng yến',
      'topping yến Chúc Cà Mau'
    ],
    canonicalUrl: 'https://test.chuccamau.com/products?c=topping'
  }
};

export const dynamicProductContent = async (slug: string): Promise<SEOContentType> => {
  const prod = await getProductBySlug(slug);
  const name = prod?.name || '';

  return {
    title: `${name} – Sản Phẩm Yến Chất Lượng Cao | Chúc Cà Mau`,
    desc: `Khám phá ${name} từ Chúc Cà Mau – sản phẩm yến cao cấp, giàu dưỡng chất, đảm bảo an toàn và tiện lợi. Tìm hiểu chi tiết thành phần, công dụng và cách sử dụng hiệu quả.`,
    keywords: [
      'sản phẩm yến cao cấp',
      'yến sào Chúc Cà Mau',
      'yến bổ dưỡng',
      'yến tự nhiên',
      'mua yến chất lượng'
    ],
    canonicalUrl: `https://test.chuccamau.com/products/${slug}`
  };
};

export const dynamicBlogContent = async (slug: string): Promise<SEOContentType> => {
  const blog = await getBlogBySlug(slug);
  const title = blog?.title || '';

  return {
    title: `${title} – Blog Chúc Cà Mau `,
    desc: `${title} – Cung cấp kiến thức và thông tin hữu ích về yến sào. Bài viết giúp bạn hiểu rõ hơn về sản phẩm, cách sử dụng, bảo quản và lợi ích sức khỏe từ yến tự nhiên.`,
    keywords: [
      'kiến thức yến sào',
      'lợi ích yến sào',
      'cách sử dụng yến',
      'bảo quản yến sào',
      'yến sào tự nhiên'
    ],
    canonicalUrl: `https://test.chuccamau.com/blog/${slug}`
  };
};
