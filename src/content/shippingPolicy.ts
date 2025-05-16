import { AppConfig } from '../AppConfig';

export const shippingPolicyContent = [
  {
    heading: '1. Phạm vi và thời gian giao hàng',
    contents: [
      {
        type: 'paragraph',
        value:
          'Nội thành TP.HCM: Giao hàng trong ngày nếu đặt trong khung giờ làm việc. Khách có thể yêu cầu thời gian giao phù hợp.'
      },
      {
        type: 'paragraph',
        value:
          'Ngoại tỉnh: Thời gian giao từ 2–5 ngày tùy theo đơn vị vận chuyển (GHN, GHTK, Viettel Post, xe khách…).'
      }
    ]
  },
  {
    heading: '2. Phí vận chuyển',
    contents: [
      {
        type: 'paragraph',
        value:
          'Phí vận chuyển sẽ được tính dựa theo địa chỉ nhận hàng, khối lượng của đơn hàng theo cước phí vận chuyển của các đơn vị đối tác.'
      },
      {
        type: 'paragraph',
        value: 'Phí vận chuyển được thông báo cụ thể sau khi xác nhận đơn hàng.'
      }
    ]
  },
  {
    heading: '3. Trách nhiệm vận chuyển',
    contents: [
      {
        type: 'paragraph',
        value:
          'Đối tác vận chuyển chịu trách nhiệm nếu hàng hóa bị móp méo, hư hỏng, chậm trễ hoặc thất lạc.'
      },
      {
        type: 'paragraph',
        value:
          'Chúng tôi sẽ hỗ trợ làm việc với đối tác vận chuyển để xử lý kịp thời các sự cố phát sinh.'
      }
    ]
  },
  {
    heading: '4. Quyền lợi khách hàng',
    contents: [
      {
        type: 'paragraph',
        value:
          'Trong trường hợp đơn hàng bị trễ, chúng tôi sẽ kịp thời thông báo đến quý khách hàng để cùng đưa ra các biện pháp xử lý phù hợp.'
      },
      {
        type: 'paragraph',
        value:
          'Nếu quý khách không còn nhu cầu nhận hàng, có thể yêu cầu hủy đơn hàng. Trong trường hợp này, toàn bộ số tiền đã thanh toán sẽ được hoàn lại trong vòng 3 - 5 ngày làm việc.'
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
          `Email: ${AppConfig.email}`,
          `Số điện thoại: ${AppConfig.phone}`,
          `Địa chỉ: ${AppConfig.address}`,
          'Hoặc gửi yêu cầu qua biểu mẫu liên hệ trên website'
        ]
      }
    ]
  }
];
