import { PolicyContentType } from '@/types/content';
import { AppConfig } from 'src/AppConfig';

export const returnPage: PolicyContentType = {
  heading: 'Chính Sách Kiểm Tra & Đổi Trả Hàng Hóa',
  contents: [
    {
      type: 'title',
      value: '1. Cam Kết Chất Lượng Sản Phẩm'
    },
    {
      type: 'paragraph',
      value:
        'Yến Sào Chúc Mau cam kết mang đến cho quý khách hàng những sản phẩm chất lượng cao. Tuy nhiên, trong quá trình vận chuyển, hàng hóa có thể gặp phải một số lỗi về hình thức như trầy xước, móp méo, rách bao bì hoặc thay đổi màu sắc.'
    },
    {
      type: 'paragraph',
      value:
        'Vì vậy, chúng tôi khuyến khích quý khách <strong>kiểm tra kỹ sản phẩm ngay khi nhận hàng</strong> để đảm bảo quyền lợi của mình.'
    },
    {
      type: 'title',
      value: '2. Hướng Dẫn Kiểm Tra Khi Nhận Hàng'
    },
    {
      type: 'title',
      value: 'Bước 1: Nhận hàng'
    },
    {
      type: 'paragraph',
      value:
        'Khi nhận được sản phẩm từ nhân viên giao hàng, quý khách vui lòng mở gói và kiểm tra ngay khi nhận hàng.'
    },
    {
      type: 'title',
      value: 'Bước 2: Kiểm tra sản phẩm'
    },
    {
      type: 'paragraph',
      value: ' Đối chiếu sản phẩm với đơn đặt hàng về:'
    },
    {
      type: 'ul',
      value: [
        'Chủng loại, mẫu mã, số lượng.',
        'Tình trạng bên ngoài: trầy xước, móp méo, bể vỡ, rách bao bì,…'
      ]
    },
    {
      type: 'title',
      value: 'Bước 3: Xử lý nếu có vấn đề'
    },
    {
      type: 'ul',
      value: [
        'Trường hợp sản phẩm không đúng hoặc bị lỗi hình thức, quý khách không muốn nhận hàng có thể <strong>trả lại ngay cho nhân viên giao hàng</strong>.',
        'Chúng tôi sẽ <strong>gửi lại sản phẩm mới</strong> đúng với đơn đặt hàng trong thời gian sớm nhất.'
      ]
    },
    {
      type: 'title',
      value: '3. Liên hệ'
    },
    {
      type: 'paragraph',
      value:
        'Nếu quý khách có bất kỳ thắc mắc, yêu cầu hoặc khiếu nại nào liên quan đến chính sách kiểm tra & đổi trả hàng hóa, vui lòng liên hệ:'
    },
    {
      type: 'ul',
      value: [
        `<strong>Email:</strong> <a href="mailto:${AppConfig.email}" className="hover:underline">${AppConfig.email}</a>`,
        `<strong>Số điện thoại:</strong> <a href="tel:${AppConfig.phone}" className="hover:underline">${AppConfig.phone}</a>`,
        `<strong>Địa chỉ:</strong> <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(AppConfig.address)}" target="_blank" rel="noopener noreferrer" class="hover:underline">${AppConfig.address}</a>`
      ]
    },
    {
      type: 'paragraph',
      value: 'Hoặc gửi yêu cầu qua biểu mẫu liên hệ trên website '
    },
    {
      type: 'paragraph',
      value:
        'Chúng tôi rất mong Quý khách phối hợp và kiểm tra kỹ sản phẩm khi nhận để đảm bảo quyền lợi. Xin chân thành cảm ơn Quý khách đã tin tưởng lựa chọn Yến Sào Chúc Cà Mau!'
    }
  ]
};
