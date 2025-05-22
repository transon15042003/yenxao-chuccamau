import { PolicyContent } from '@/types/policy';
import { AppConfig } from 'src/AppConfig';

export const paymentPolicyContent: PolicyContent[] = [
  {
    contents: [
      {
        type: 'paragraph',
        value:
          'Nhằm phục vụ quý khách hàng tốt hơn trong quá trình mua sắm sản phẩm, Yến Sào Chúc Cà Mau xin giới thiệu các phương thức thanh toán hiện có như sau:'
      }
    ]
  },
  {
    heading: '1. Thanh Toán Trực Tiếp Tại Cửa Hàng',
    contents: [
      {
        type: 'paragraph',
        value:
          'Quý khách hàng có thể thanh toán trực tiếp bằng tiền mặt hoặc chuyển khoản khi mua hàng tại hệ thống cửa hàng của Yến Sào Chúc Cà Mau. Đây là hình thức thanh toán nhanh chóng và thuận tiện.'
      },
      {
        type: 'paragraph',
        value: `<strong>Địa chỉ cửa hàng:</strong> <a href="${AppConfig.addressURL}" target="_blank" rel="noopener noreferrer" class="hover:underline">${AppConfig.address}</a>`
      }
    ]
  },
  {
    heading: '2. Thanh Toán Khi Nhận Hàng (COD)',
    contents: [
      {
        type: 'paragraph',
        value:
          'Đối với các đơn hàng đặt mua qua website hoặc hotline, quý khách có thể lựa chọn thanh toán khi nhận hàng. Vui lòng cung cấp đầy đủ và chính xác các thông tin như:'
      },
      {
        type: 'ul',
        values: [
          'Họ và tên người nhận',
          'Số điện thoại liên hệ',
          'Địa chỉ giao hàng',
          'Email (nếu có)'
        ]
      },
      {
        type: 'paragraph',
        value:
          '<strong>Lưu ý:</strong> Quý khách cần kiểm tra kỹ thông tin đặt hàng để đảm bảo đơn hàng được xử lý nhanh chóng và chính xác. Trong trường hợp cần thay đổi thông tin, vui lòng liên hệ bộ phận chăm sóc khách hàng sớm nhất có thể.'
      }
    ]
  },
  {
    heading: '3. Thanh Toán Trực Tuyến Qua Cổng Thanh Toán Điện Tử',
    contents: [
      {
        type: 'paragraph',
        value:
          'Website của Yến Sào Chúc Cà Mau hiện hỗ trợ thanh toán trực tuyến thông qua các đối tác cung cấp dịch vụ thanh toán uy tín, bao gồm:'
      },
      {
        type: 'ul',
        values: [
          'VNPay: Hỗ trợ thanh toán qua mã QR, thẻ ATM nội địa và thẻ tín dụng quốc tế.',
          'Momo: Ví điện tử phổ biến, thao tác nhanh chóng, an toàn.',
          'Internet Banking: Thanh toán trực tiếp từ tài khoản ngân hàng thông qua kết nối bảo mật với hệ thống ngân hàng.'
        ]
      },
      {
        type: 'paragraph',
        value:
          'Hình thức này giúp Quý Khách hoàn tất đơn hàng nhanh chóng, tiện lợi và tiết kiệm thời gian.'
      }
    ]
  },
  {
    heading: '4. Liên Hệ',
    contents: [
      {
        type: 'paragraph',
        value:
          'Nếu quý khách có bất kỳ thắc mắc, yêu cầu hoặc khiếu nại nào liên quan đến chính sách thanh toán, vui lòng liên hệ:'
      },
      {
        type: 'ul',
        values: [`Số điện thoại: ${AppConfig.phone}`, `Địa chỉ: ${AppConfig.address}`]
      },
      {
        type: 'paragraph',
        value: 'Xin chân thành cảm ơn Quý khách đã tin tưởng lựa chọn Yến Sào Chúc Cà Mau!'
      }
    ]
  }
];
