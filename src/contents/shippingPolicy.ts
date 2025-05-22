import { PolicyContent } from '@/types/policy';
import { AppConfig } from 'src/AppConfig';

export const shippingPolicyContent: PolicyContent[] = [
  {
    contents: [
      {
        type: 'paragraph',
        value:
          'Nhằm mang đến trải nghiệm mua sắm thuận tiện và nhanh chóng, Yến Sào Chúc Cà Mau xin thông báo chính sách vận chuyển được áp dụng tại website như sau:'
      }
    ]
  },
  {
    heading: '1. Phạm vi và thời gian giao hàng',
    contents: [
      {
        type: 'ul',
        values: [
          '<strong>Nội thành TP.HCM</strong>: Giao hàng trong ngày nếu đặt trong khung giờ làm việc. Khách có thể yêu cầu thời gian giao phù hợp.',
          '<strong>Ngoại tỉnh</strong>: Thời gian giao từ 2–5 ngày tùy theo đơn vị vận chuyển (GHN, GHTK, Viettel Post, xe khách…).'
        ]
      }
    ]
  },
  {
    heading: '2. Phí vận chuyển',
    contents: [
      {
        type: 'ul',
        values: [
          'Phí vận chuyển sẽ được tính dựa theo địa chỉ nhận hàng, khối lượng của đơn hàng theo cước phí vận chuyển của các đơn vị đối tác.',
          'Phí vận chuyển được thông báo cụ thể sau khi xác nhận đơn hàng.'
        ]
      }
    ]
  },
  {
    heading: '3. Trách nhiệm vận chuyển',
    contents: [
      {
        type: 'ul',
        values: [
          'Đối tác vận chuyển chịu trách nhiệm nếu hàng hóa bị móp méo, hư hỏng, chậm trễ hoặc thất lạc.',
          'Chúng tôi sẽ hỗ trợ làm việc với đối tác vận chuyển để xử lý kịp thời các sự cố phát sinh.'
        ]
      }
    ]
  },
  {
    heading: '4. Quyền lợi khách hàng',
    contents: [
      {
        type: 'ul',
        values: [
          'Trong trường hợp đơn hàng bị trễ, chúng tôi sẽ kịp thời thông báo đến quý khách hàng để cùng đưa ra các biện pháp xử lý phù hợp.',
          'Nếu quý khách không còn nhu cầu nhận hàng, có thể yêu cầu hủy đơn hàng. Trong trường hợp này, toàn bộ số tiền đã thanh toán sẽ được hoàn lại trong vòng 3 - 5 ngày làm việc.'
        ]
      }
    ]
  },
  {
    heading: '5. Liên hệ hỗ trợ',
    contents: [
      {
        type: 'paragraph',
        value:
          'Nếu quý khách có bất kỳ thắc mắc, yêu cầu hoặc khiếu nại nào liên quan đến chính sách vận chuyển, vui lòng liên hệ:'
      },
      {
        type: 'ul',
        values: [
          // `<strong>Email:</strong> <a href="mailto:${AppConfig.shippingEmail}" class="hover:underline">${AppConfig.shippingEmail}</a>`,
          `<strong>Số điện thoại:</strong> <a href="tel:${AppConfig.phone}" class="hover:underline">${AppConfig.phone}</a>`,
          `<strong>Địa chỉ:</strong> <a href="${AppConfig.embedUrl}" target="_blank" rel="noopener noreferrer" class="hover:underline">${AppConfig.address}</a>`
        ]
      },
      {
        type: 'paragraph',
        value: 'Xin chân thành cảm ơn quý khách đã tin tưởng lựa chọn Yến Sào Chúc Cà Mau!'
      }
    ]
  }
];
