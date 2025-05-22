import { PolicyContent } from '@/types/policy';
import { AppConfig } from 'src/AppConfig';

export const privacyPolicyContent: PolicyContent[] = [
  {
    contents: [
      {
        type: 'paragraph',
        value:
          'Yến Sào Chúc Cà Mau cam kết bảo mật thông tin cá nhân của khách hàng và minh bạch về việc thu thập, sử dụng, lưu trữ, chia sẻ cũng như quyền lợi liên quan.'
      }
    ]
  },
  {
    heading: '1. Thông Tin Chúng Tôi Thu Thập',
    contents: [
      {
        type: 'paragraph',
        value:
          'Chúng tôi có thể thu thập thông tin cá nhân của khách hàng khi thực hiện đặt hàng, liên hệ tư vấn, hỗ trợ bao gồm:'
      },
      {
        type: 'ul',
        values: [
          'Họ và tên',
          'Số điện thoại',
          'Địa chỉ email',
          'Địa chỉ giao hàng',
          'Tên công ty, địa chỉ, email và mã số thuế (nếu cần xuất hóa đơn)'
        ]
      }
    ]
  },
  {
    heading: '2. Mục Đích Sử Dụng Thông Tin',
    contents: [
      {
        type: 'paragraph',
        value: 'Thông tin cá nhân của quý khách sẽ được chúng tôi sử dụng cho các mục đích sau:'
      },
      {
        type: 'ul',
        values: [
          'Xử lý đơn hàng: Xác nhận đơn hàng, giao hàng và hỗ trợ hậu mãi.',
          'Tư vấn – Chăm sóc khách hàng: Cung cấp thông tin sản phẩm, giải đáp thắc mắc.',
          'Gửi thông báo: Gửi thông tin khuyến mãi, chương trình ưu đãi (nếu được khách hàng đồng ý).',
          'Tuân thủ pháp luật: Đáp ứng yêu cầu của các cơ quan chức năng có thẩm quyền (nếu có).'
        ]
      }
    ]
  },
  {
    heading: '3. Bảo Mật Thông Tin',
    contents: [
      {
        type: 'paragraph',
        value:
          'Chúng tôi áp dụng nhiều biện pháp bảo mật nghiêm ngặt nhằm bảo vệ thông tin cá nhân khỏi các hành vi truy cập trái phép, sử dụng sai mục đích hoặc tiết lộ không mong muốn:'
      },
      {
        type: 'ul',
        values: [
          'Dữ liệu của quý khách được lưu trữ trên hệ thống máy chủ có bảo mật và phân quyền rõ ràng.',
          'Nhân viên chỉ được phép truy cập thông tin khi cần thiết để phục vụ khách hàng.',
          'Chúng tôi <strong>không bán, trao đổi hay chia sẻ thông tin của quý khách với bên thứ ba</strong> vì mục đích thương mại khi chưa có sự cho phép.',
          'Mọi thông tin cá nhân sẽ được xóa bỏ hoặc ẩn danh sau khi hết thời gian lưu trữ cần thiết hoặc theo yêu cầu từ khách hàng.'
        ]
      }
    ]
  },
  {
    heading: '4. Chia Sẻ Thông Tin',
    contents: [
      {
        type: 'paragraph',
        value: 'Thông tin cá nhân của quý khách chỉ được chia sẻ trong các trường hợp sau:'
      },
      {
        type: 'ul',
        values: [
          'Đơn vị vận chuyển: Để thực hiện giao hàng tới địa chỉ của quý khách.',
          'Nhân viên công ty: Để xử đơn hàng, chăm sóc khách hàng trong quá trình sử dụng sản phẩm.',
          'Cơ quan nhà nước: Khi có yêu cầu theo quy định pháp luật.',
          'Chuyển nhượng doanh nghiệp: Nếu có sự thay đổi về cấu trúc doanh nghiệp (sáp nhập, chuyển giao).'
        ]
      }
    ]
  },
  {
    heading: '5. Quyền Của Bạn',
    contents: [
      {
        type: 'paragraph',
        value: 'Quý khách có toàn quyền đối với thông tin cá nhân của mình, bao gồm:'
      },
      {
        type: 'ul',
        values: [
          'Yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân đã cung cấp.',
          'Khiếu nại nếu phát hiện thông tin bị sử dụng sai mục đích hoặc không an toàn.'
        ]
      }
    ]
  },
  {
    heading: '6. Thay đổi chính sách',
    contents: [
      {
        type: 'paragraph',
        value:
          'Chúng tôi có thể cập nhật Chính Sách Bảo Mật này để phù hợp với quy định pháp luật hoặc thay đổi trong hoạt động kinh doanh. Mọi cập nhật sẽ được công bố trên website và có hiệu lực kể từ thời điểm đăng tải.'
      }
    ]
  },
  {
    heading: '7. Liên Hệ',
    contents: [
      {
        type: 'paragraph',
        value:
          'Nếu quý khách có bất kỳ thắc mắc, yêu cầu hoặc khiếu nại nào liên quan đến chính sách bảo mật, vui lòng liên hệ:'
      },
      {
        type: 'ul',
        values: [
          // `<strong>Email:</strong> <a href="mailto:${AppConfig.privacyEmail}" class="hover:underline">${AppConfig.privacyEmail}</a>`,
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
