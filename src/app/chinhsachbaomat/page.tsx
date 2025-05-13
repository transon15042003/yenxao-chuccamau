import Image from 'next/image';

const PrivacyPolicyPage = () => {
  return (
    <div
      className="min-h-screen w-full flex justify-center items-start py-12 px-2 md:px-0 relative"
      style={{
        backgroundImage: 'url(/images/chinhsach/chinhsach-1.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left top'
      }}
    >
      <div
        className="relative bg-white/60 rounded-xl shadow-lg max-w-6xl w-full p-8 md:p-12"
        style={{ zIndex: 1 }}
      >
        <h1 className="text-center text-3xl md:text-4xl font-bold text-primary mb-8">
          Chính sách bảo mật
        </h1>
        <div className="text-base md:text-lg text-typo-1 space-y-6"></div>
        <div>
          <b>1. Thông tin chúng tôi thu thập</b>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Thông tin cá nhân: Họ tên, địa chỉ email, số điện thoại, địa chỉ giao hàng.</li>
            <li>
              Thông tin thanh toán: Thông tin thẻ tín dụng, tài khoản ngân hàng (được mã hóa và bảo
              mật).
            </li>
            <li>Thông tin thiết bị: Địa chỉ IP, loại trình duyệt, thời gian truy cập.</li>
          </ul>
        </div>
        <div>
          <b>2. Mục đích sử dụng thông tin</b>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Xử lý đơn hàng và giao dịch của bạn.</li>
            <li>Gửi thông báo về đơn hàng và hỗ trợ kỹ thuật.</li>
            <li>Cung cấp thông tin về tình trạng đơn hàng, cập nhật tài khoản.</li>
            <li>Nâng cao trải nghiệm người dùng và phát triển sản phẩm.</li>
          </ul>
        </div>
        <div>
          <b>3. Bảo mật thông tin</b>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Mã hóa dữ liệu nhạy cảm như thông tin thanh toán.</li>
            <li>Hệ thống bảo mật mạng và kiểm soát truy cập.</li>
            <li>Đào tạo nhân viên về quy trình bảo mật và bảo vệ dữ liệu.</li>
          </ul>
        </div>
        <div>
          <b>4. Chia sẻ thông tin</b>
          <p>
            Chúng tôi không bán, trao đổi hoặc chuyển giao thông tin cá nhân của bạn cho bên thứ ba
            mà không có sự đồng ý của bạn, ngoại trừ:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Các đối tác cung cấp dịch vụ (vận chuyển, thanh toán) để thực hiện giao dịch.</li>
            <li>Tuân thủ yêu cầu pháp lý hoặc bảo vệ quyền lợi của chúng tôi.</li>
          </ul>
        </div>
        <div>
          <b>5. Quyền của bạn</b>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Quyền truy cập và yêu cầu bản sao thông tin của bạn.</li>
            <li>Quyền yêu cầu chỉnh sửa thông tin không chính xác.</li>
            <li>Quyền yêu cầu xóa hoặc tạm ngừng xử lý một số trường hợp.</li>
            <li>Quyền hạn chế hoặc phản đối việc xử lý thông tin.</li>
          </ul>
        </div>
        <div>
          <b>6. Liên hệ</b>
          <p>
            Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật của chúng tôi, vui lòng liên hệ:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              <b>Email:</b> privacy@company.com
            </li>
            <li>
              <b>Điện thoại:</b> 0123 456 789
            </li>
            <li>
              <b>Địa chỉ:</b> 123 Đường ABC, Quận XYZ, Thành phố HCM
            </li>
          </ul>
        </div>
      </div>
      <Image
        src="/images/chinhsach/chinhsach-2.png"
        alt="Decorative corner"
        width={300}
        height={120}
        className="absolute right-0 bottom-0 pointer-events-none select-none"
        style={{ zIndex: 2 }}
      />
    </div>
  );
};

export default PrivacyPolicyPage;
