import { AppConfig } from '../AppConfig';

export const shippingPolicyContent = [
  {
    heading: '1. Khu vực giao hàng',
    contents: [
      {
        type: 'ul',
        values: [
          'Giao hàng toàn quốc.',
          'Có thể kéo dài thời gian giao hàng đối với khu vực hải đảo và vùng xa.'
        ]
      }
    ]
  },
  {
    heading: '2. Phương thức vận chuyển',
    contents: [
      {
        type: 'ul',
        values: [
          'Giao hàng tiêu chuẩn: Áp dụng cho tất cả các đơn hàng thông thường.',
          'Giao hàng nhanh: Áp dụng cho các đơn hàng cần giao gấp (có phụ phí).',
          'Giao hàng hẹn giờ: Áp dụng cho một số khu vực nội thành (có phụ phí).'
        ]
      }
    ]
  },
  {
    heading: '3. Thời gian giao hàng',
    contents: [
      {
        type: 'ul',
        values: [
          'Nội thành Hà Nội và TP.HCM: 1-2 ngày làm việc.',
          'Các tỉnh thành khác: 2-5 ngày làm việc.',
          'Vùng sâu vùng xa, hải đảo: 5-7 ngày làm việc.',
          'Giao hàng nhanh: 24 giờ đối với nội thành, 48 giờ đối với các tỉnh lân cận.'
        ]
      },
      {
        type: 'paragraph',
        value:
          'Lưu ý: Thời gian giao hàng có thể bị ảnh hưởng bởi điều kiện thời tiết, giao thông hoặc các sự kiện bất khả kháng khác.'
      }
    ]
  },
  {
    heading: '4. Phí vận chuyển',
    contents: [
      {
        type: 'paragraph',
        value: 'Phí vận chuyển được tính dựa trên các yếu tố sau:'
      },
      {
        type: 'ul',
        values: [
          'Khoảng cách từ kho hàng đến địa chỉ giao hàng.',
          'Trọng lượng và kích thước của sản phẩm.',
          'Phương thức vận chuyển bạn lựa chọn.'
        ]
      },
      {
        type: 'paragraph',
        value: 'Bảng phí vận chuyển dự kiến:'
      },
      {
        type: 'ul',
        values: [
          `Nội thành Hà Nội và TP.HCM: ${AppConfig.shipping.fees.innerCity.min.toLocaleString()}đ - ${AppConfig.shipping.fees.innerCity.max.toLocaleString()}đ.`,
          `Các tỉnh thành khác: ${AppConfig.shipping.fees.otherProvinces.min.toLocaleString()}đ - ${AppConfig.shipping.fees.otherProvinces.max.toLocaleString()}đ.`,
          `Vùng sâu vùng xa, hải đảo: ${AppConfig.shipping.fees.remoteAreas.min.toLocaleString()}đ - ${AppConfig.shipping.fees.remoteAreas.max.toLocaleString()}đ.`,
          `Phụ phí giao hàng nhanh: +${AppConfig.shipping.fees.expressDelivery.toLocaleString()}đ.`,
          `Phụ phí giao hàng hẹn giờ: +${AppConfig.shipping.fees.scheduledDelivery.toLocaleString()}đ.`
        ]
      },
      {
        type: 'paragraph',
        value: `Miễn phí vận chuyển cho đơn hàng từ ${AppConfig.shipping.freeShippingThreshold.toLocaleString()}đ trở lên (áp dụng cho giao hàng tiêu chuẩn).`
      }
    ]
  },
  {
    heading: '5. Kiểm tra và nhận hàng',
    contents: [
      {
        type: 'ul',
        values: [
          'Kiểm tra tình trạng bên ngoài của kiện hàng trước khi ký nhận.',
          'Mở kiện hàng và kiểm tra sản phẩm ngay khi nhận được (tốt nhất là có sự chứng kiến của nhân viên giao hàng).',
          'Nếu phát hiện sản phẩm bị hư hỏng hoặc không đúng với đơn đặt hàng, vui lòng từ chối nhận hàng hoặc ghi chú vào biên bản giao nhận.',
          'Liên hệ ngay với bộ phận Chăm sóc Khách hàng để được hỗ trợ.'
        ]
      }
    ]
  },
  {
    heading: '6. Theo dõi đơn hàng',
    contents: [
      {
        type: 'ul',
        values: [
          'Đăng nhập vào tài khoản trên website và kiểm tra mục "Đơn hàng của tôi".',
          'Sử dụng mã vận đơn được cung cấp trong email xác nhận để tra cứu trên website của đơn vị vận chuyển.',
          'Liên hệ trực tiếp với bộ phận Chăm sóc Khách hàng.'
        ]
      }
    ]
  },
  {
    heading: '7. Liên hệ hỗ trợ',
    contents: [
      {
        type: 'paragraph',
        value: 'Nếu bạn có bất kỳ câu hỏi nào về vận chuyển, vui lòng liên hệ:'
      },
      {
        type: 'ul',
        values: [
          `Email: ${AppConfig.contact.shippingEmail}`,
          `Hotline: ${AppConfig.contact.phone}`,
          `Thời gian làm việc: ${AppConfig.contact.workingHours}`
        ]
      }
    ]
  }
];
