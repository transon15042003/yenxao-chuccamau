import { PolicyContentType } from '@/types/content';

export const returnPage: PolicyContentType = {
  heading: 'Chính sách đổi trả hàng',
  contents: [
    {
      type: 'paragraph',
      value:
        'Chúng tôi cam kết đảm bảo sự hài lòng của khách hàng với mọi sản phẩm. Chính sách đổi trả này được thiết kế để giúp bạn hiểu rõ quy trình khi cần đổi hoặc trả sản phẩm.'
    },
    {
      type: 'title',
      value: '1. Điều kiện đổi trả'
    },
    {
      type: 'paragraph',
      value: 'Bạn có thể đổi trả sản phẩm trong các trường hợp sau:'
    },
    {
      type: 'ul',
      value: [
        'Sản phẩm bị lỗi sản xuất hoặc hư hỏng khi nhận hàng.',
        'Sản phẩm không đúng với mô tả hoặc hình ảnh trên website.',
        'Sản phẩm không vừa kích cỡ hoặc không phù hợp với nhu cầu.',
        'Nhận được sản phẩm không đúng với đơn đặt hàng.'
      ]
    },
    {
      type: 'title',
      value: '2. Thời hạn đổi trả'
    },
    {
      type: 'paragraph',
      value: 'Thời hạn đổi trả sản phẩm như sau:'
    },
    {
      type: 'ul',
      value: [
        'Đối với sản phẩm lỗi: 30 ngày kể từ ngày nhận hàng.',
        'Đối với sản phẩm không vừa ý: 14 ngày kể từ ngày nhận hàng.',
        'Đối với sản phẩm khuyến mãi: Vui lòng kiểm tra điều kiện cụ thể của chương trình khuyến mãi.'
      ]
    },
    {
      type: 'title',
      value: '3. Quy trình đổi trả'
    },
    {
      type: 'paragraph',
      value: 'Để đổi trả sản phẩm, vui lòng thực hiện các bước sau:'
    },
    {
      type: 'ol',
      value: [
        'Liên hệ với bộ phận Chăm sóc Khách hàng qua email hoặc hotline.',
        'Cung cấp thông tin đơn hàng, lý do đổi trả và hình ảnh sản phẩm (nếu cần).',
        'Nhận mã đổi trả và hướng dẫn đóng gói sản phẩm.',
        'Gửi sản phẩm về địa chỉ được cung cấp, kèm theo hóa đơn và phiếu bảo hành (nếu có).',
        'Chờ xác nhận và xử lý từ bộ phận Chăm sóc Khách hàng.'
      ]
    },
    {
      type: 'title',
      value: '4. Hình thức hoàn tiền'
    },
    {
      type: 'paragraph',
      value: 'Tùy thuộc vào trường hợp, chúng tôi sẽ hoàn tiền theo một trong các hình thức sau:'
    },
    {
      type: 'ul',
      value: [
        'Hoàn tiền vào phương thức thanh toán ban đầu (thẻ tín dụng, tài khoản ngân hàng).',
        'Cung cấp mã giảm giá hoặc credit để sử dụng cho lần mua hàng tiếp theo.',
        'Đổi sản phẩm mới có giá trị tương đương hoặc cao hơn (bạn sẽ thanh toán phần chênh lệch)'
      ]
    },
    {
      type: 'paragraph',
      value:
        'Thời gian hoàn tiền: 5-10 ngày làm việc kể từ khi chúng tôi nhận được sản phẩm trả lại'
    },
    {
      type: 'title',
      value: '5. Chi phí đổi trả'
    },
    {
      type: 'paragraph',
      value: 'Chi phí đổi trả được quy định như sau:'
    },
    {
      type: 'ul',
      value: [
        'Đối với sản phẩm lỗi hoặc không đúng mô tả: Chúng tôi sẽ chịu chi phí vận chuyển.',
        'Đối với sản phẩm không vừa ý hoặc không phù hợp: Khách hàng chịu chi phí vận chuyển.'
      ]
    },
    {
      type: 'title',
      value: '6. Sản phẩm không được đổi trả'
    },
    {
      type: 'paragraph',
      value: 'Một số sản phẩm không được áp dụng chính sách đổi trả:'
    },
    {
      type: 'ul',
      value: [
        'Sản phẩm đã qua sử dụng, bị hư hỏng do lỗi người dùng.',
        'Sản phẩm không còn nguyên vẹn, mất tem nhãn, bao bì.',
        'Sản phẩm được đánh dấu rõ là "Không được đổi trả" trên trang sản phẩm',
        'Sản phẩm thuộc danh mục hàng tiêu dùng cá nhân (vì lý do vệ sinh).'
      ]
    },
    {
      type: 'title',
      value: '7. Liên hệ hỗ trợ'
    },
    {
      type: 'paragraph',
      value: 'Nếu bạn có bất kỳ câu hỏi nào về chính sách đổi trả, vui lòng liên hệ:'
    }
  ]
};
