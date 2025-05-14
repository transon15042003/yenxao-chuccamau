import Image from 'next/image';

const ShippingPolicyPage = () => {
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
          Chính sách vận chuyển
        </h1>
        <div className="text-base md:text-lg text-typo-1 space-y-6">
          <div>
            <b>1. Khu vực giao hàng</b>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Giao hàng toàn quốc.</li>
              <li>Có thể kéo dài thời gian giao hàng đối với khu vực hải đảo và vùng xa.</li>
            </ul>
          </div>
          <div>
            <b>2. Phương thức vận chuyển</b>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Giao hàng tiêu chuẩn: Áp dụng cho tất cả các đơn hàng thông thường.</li>
              <li>Giao hàng nhanh: Áp dụng cho các đơn hàng cần giao gấp (có phụ phí).</li>
              <li>Giao hàng hẹn giờ: Áp dụng cho một số khu vực nội thành (có phụ phí).</li>
            </ul>
          </div>
          <div>
            <b>3. Thời gian giao hàng</b>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Nội thành Hà Nội và TP.HCM: 1-2 ngày làm việc.</li>
              <li>Các tỉnh thành khác: 2-5 ngày làm việc.</li>
              <li>Vùng sâu vùng xa, hải đảo: 5-7 ngày làm việc.</li>
              <li>Giao hàng nhanh: 24 giờ đối với nội thành, 48 giờ đối với các tỉnh lân cận.</li>
            </ul>
            <p className="mt-2 italic">
              Lưu ý: Thời gian giao hàng có thể bị ảnh hưởng bởi điều kiện thời tiết, giao thông
              hoặc các sự kiện bất khả kháng khác.
            </p>
          </div>
          <div>
            <b>4. Phí vận chuyển</b>
            <p>Phí vận chuyển được tính dựa trên các yếu tố sau:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Khoảng cách từ kho hàng đến địa chỉ giao hàng.</li>
              <li>Trọng lượng và kích thước của sản phẩm.</li>
              <li>Phương thức vận chuyển bạn lựa chọn.</li>
            </ul>
            <b>Bảng phí vận chuyển dự kiến:</b>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Nội thành Hà Nội và TP.HCM: 20.000đ - 40.000đ.</li>
              <li>Các tỉnh thành khác: 30.000đ - 70.000đ.</li>
              <li>Vùng sâu vùng xa, hải đảo: 70.000đ - 120.000đ.</li>
              <li>Phụ phí giao hàng nhanh: +30.000đ.</li>
              <li>Phụ phí giao hàng hẹn giờ: +50.000đ.</li>
            </ul>
            <p className="mt-2">
              Miễn phí vận chuyển cho đơn hàng từ 500.000đ trở lên (áp dụng cho giao hàng tiêu
              chuẩn).
            </p>
          </div>
          <div>
            <b>5. Kiểm tra và nhận hàng</b>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Kiểm tra tình trạng bên ngoài của kiện hàng trước khi ký nhận.</li>
              <li>
                Mở kiện hàng và kiểm tra sản phẩm ngay khi nhận được (tốt nhất là có sự chứng kiến
                của nhân viên giao hàng).
              </li>
              <li>
                Nếu phát hiện sản phẩm bị hư hỏng hoặc không đúng với đơn đặt hàng, vui lòng từ chối
                nhận hàng hoặc ghi chú vào biên bản giao nhận.
              </li>
              <li>Liên hệ ngay với bộ phận Chăm sóc Khách hàng để được hỗ trợ.</li>
            </ul>
          </div>
          <div>
            <b>6. Theo dõi đơn hàng</b>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                Đăng nhập vào tài khoản trên website và kiểm tra mục &quot;Đơn hàng của tôi&quot;.
              </li>
              <li>
                Sử dụng mã vận đơn được cung cấp trong email xác nhận để tra cứu trên website của
                đơn vị vận chuyển.
              </li>
              <li>Liên hệ trực tiếp với bộ phận Chăm sóc Khách hàng.</li>
            </ul>
          </div>
          <div>
            <b>7. Liên hệ hỗ trợ</b>
            <p>Nếu bạn có bất kỳ câu hỏi nào về vận chuyển, vui lòng liên hệ:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                <b>Email:</b> shipping@company.com
              </li>
              <li>
                <b>Hotline:</b> 0123 456 789
              </li>
              <li>
                <b>Thời gian làm việc:</b> 8:00 - 20:00, từ Thứ Hai đến Chủ Nhật
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
    </div>
  );
};

export default ShippingPolicyPage;
