import { PolicyContent } from '@/types/policy';
import { AppConfig } from 'src/AppConfig';

export const returnPolicyContent: PolicyContent[] = [
  {
    contents: [
      {
        type: 'paragraph',
        value:
          'Yến Sào Chúc Mau cam kết mang đến cho quý khách hàng những sản phẩm chất lượng cao. Tuy nhiên, trong quá trình vận chuyển, hàng hóa có thể gặp phải một số lỗi về hình thức như trầy xước, móp méo, rách bao bì hoặc thay đổi màu sắc.'
      },
      {
        type: 'paragraph',
        value:
          'Vì vậy, chúng tôi khuyến khích quý khách <strong>kiểm tra kỹ sản phẩm ngay khi nhận hàng</strong> để đảm bảo quyền lợi của mình.'
      }
    ]
  },
  {
    heading: '1. Cam Kết Chất Lượng Sản Phẩm',
    contents: [
      {
        type: 'paragraph',
        value:
          'Yến Sào Chúc Mau cam kết mang đến cho quý khách hàng những sản phẩm chất lượng cao. Tuy nhiên, trong quá trình vận chuyển, hàng hóa có thể gặp phải một số lỗi về hình thức như trầy xước, móp méo, rách bao bì hoặc thay đổi màu sắc.'
      }
    ]
  },
  {
    heading: '2. Hướng Dẫn Kiểm Tra Khi Nhận Hàng',
    contents: [
      {
        type: 'paragraph',
        value:
          'Khi nhận được sản phẩm từ nhân viên giao hàng, quý khách vui lòng mở gói và kiểm tra ngay khi nhận hàng.'
      },
      {
        type: 'paragraph',
        value: 'Đối chiếu sản phẩm với đơn đặt hàng về:'
      },
      {
        type: 'ul',
        values: [
          'Chủng loại, mẫu mã, số lượng.',
          'Tình trạng bên ngoài: trầy xước, móp méo, bể vỡ, rách bao bì,…'
        ]
      }
    ]
  },
  {
    heading: '3. Xử Lý Khi Có Vấn Đề',
    contents: [
      {
        type: 'ul',
        values: [
          'Trường hợp sản phẩm không đúng hoặc bị lỗi hình thức, quý khách không muốn nhận hàng có thể <strong>trả lại ngay cho nhân viên giao hàng</strong>.',
          'Chúng tôi sẽ <strong>gửi lại sản phẩm mới</strong> đúng với đơn đặt hàng trong thời gian sớm nhất.'
        ]
      }
    ]
  },
  {
    heading: '4. Liên Hệ Hỗ Trợ',
    contents: [
      {
        type: 'paragraph',
        value:
          'Nếu quý khách có bất kỳ thắc mắc, yêu cầu hoặc khiếu nại nào liên quan đến chính sách kiểm tra & đổi trả hàng hóa, vui lòng liên hệ:'
      },
      {
        type: 'ul',
        values: [
          `<strong>Email:</strong> <a href="mailto:${AppConfig.returnEmail}" class="hover:underline">${AppConfig.returnEmail}</a>`,
          `<strong>Số điện thoại:</strong> <a href="tel:${AppConfig.phone}" class="hover:underline">${AppConfig.phone}</a>`,
          `<strong>Địa chỉ:</strong> <a href="${AppConfig.embedUrl}" target="_blank" rel="noopener noreferrer" class="hover:underline">${AppConfig.address}</a>`
        ]
      },
      // {
      //   type: 'paragraph',
      //   value: 'Hoặc gửi yêu cầu qua biểu mẫu liên hệ trên website'
      // },
      {
        type: 'paragraph',
        value:
          'Chúng tôi rất mong Quý khách phối hợp và kiểm tra kỹ sản phẩm khi nhận để đảm bảo quyền lợi. Xin chân thành cảm ơn Quý khách đã tin tưởng lựa chọn Yến Sào Chúc Cà Mau!'
      }
    ]
  }
];
