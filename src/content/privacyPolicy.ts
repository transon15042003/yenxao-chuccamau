import { AppConfig } from '../AppConfig';

export const privacyPolicyContent = [
  {
    heading: '1. Thông tin chúng tôi thu thập',
    contents: [
      {
        type: 'ul',
        values: [
          'Thông tin cá nhân: Họ tên, địa chỉ email, số điện thoại, địa chỉ giao hàng.',
          'Thông tin thanh toán: Thông tin thẻ tín dụng, tài khoản ngân hàng (được mã hóa và bảo mật).',
          'Thông tin thiết bị: Địa chỉ IP, loại trình duyệt, thời gian truy cập.'
        ]
      }
    ]
  },
  {
    heading: '2. Mục đích sử dụng thông tin',
    contents: [
      {
        type: 'ul',
        values: [
          'Xử lý đơn hàng và giao dịch của bạn.',
          'Gửi thông báo về đơn hàng và hỗ trợ kỹ thuật.',
          'Cung cấp thông tin về tình trạng đơn hàng, cập nhật tài khoản.',
          'Nâng cao trải nghiệm người dùng và phát triển sản phẩm.'
        ]
      }
    ]
  },
  {
    heading: '3. Bảo mật thông tin',
    contents: [
      {
        type: 'ul',
        values: [
          'Mã hóa dữ liệu nhạy cảm như thông tin thanh toán.',
          'Hệ thống bảo mật mạng và kiểm soát truy cập.',
          'Đào tạo nhân viên về quy trình bảo mật và bảo vệ dữ liệu.'
        ]
      }
    ]
  },
  {
    heading: '4. Chia sẻ thông tin',
    contents: [
      {
        type: 'paragraph',
        value:
          'Chúng tôi không bán, trao đổi hoặc chuyển giao thông tin cá nhân của bạn cho bên thứ ba mà không có sự đồng ý của bạn, ngoại trừ:'
      },
      {
        type: 'ul',
        values: [
          'Các đối tác cung cấp dịch vụ (vận chuyển, thanh toán) để thực hiện giao dịch.',
          'Tuân thủ yêu cầu pháp lý hoặc bảo vệ quyền lợi của chúng tôi.'
        ]
      }
    ]
  },
  {
    heading: '5. Quyền của bạn',
    contents: [
      {
        type: 'ul',
        values: [
          'Quyền truy cập và yêu cầu bản sao thông tin của bạn.',
          'Quyền yêu cầu chỉnh sửa thông tin không chính xác.',
          'Quyền yêu cầu xóa hoặc tạm ngừng xử lý một số trường hợp.',
          'Quyền hạn chế hoặc phản đối việc xử lý thông tin.'
        ]
      }
    ]
  },
  {
    heading: '6. Liên hệ',
    contents: [
      {
        type: 'paragraph',
        value:
          'Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật của chúng tôi, vui lòng liên hệ:'
      },
      {
        type: 'ul',
        values: [
          `Email: ${AppConfig.contact.email}`,
          `Điện thoại: ${AppConfig.contact.phone}`,
          `Địa chỉ: ${AppConfig.contact.address}`
        ]
      }
    ]
  }
];
