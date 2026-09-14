import Link from 'next/link';
import { redirect } from 'next/navigation';

import { retrieveCustomer, signout } from '@/lib/data/customer';

export default async function AccountPage() {
  const customer = await retrieveCustomer();
  if (!customer) {
    redirect('/account/login');
  }

  return (
    <div className="bg-[#F7F7F7] min-h-[60vh] pt-10 pb-20">
      <div className="w-[95%] lg:w-[70%] mx-auto 2xl:max-w-[900px] bg-white rounded-[5px] p-6 md:p-10">
        <h1 className="text-2xl font-bold mb-2">Tài khoản</h1>
        <p className="text-gray-600 mb-8">
          Xin chào,{' '}
          <span className="font-semibold text-primary">
            {customer.first_name || customer.email}
          </span>
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/account/orders"
            className="border border-gray-200 rounded-[5px] p-5 hover:border-primary transition"
          >
            <h2 className="font-bold text-lg">Đơn hàng của tôi</h2>
            <p className="text-sm text-gray-500 mt-1">Xem lịch sử đơn đã đặt</p>
          </Link>
          <Link
            href="/account/addresses"
            className="border border-gray-200 rounded-[5px] p-5 hover:border-primary transition"
          >
            <h2 className="font-bold text-lg">Sổ địa chỉ</h2>
            <p className="text-sm text-gray-500 mt-1">Quản lý địa chỉ giao hàng</p>
          </Link>
        </div>

        <form action={signout} className="mt-10">
          <button
            type="submit"
            className="px-5 py-2 border border-gray-300 rounded-[5px] hover:bg-gray-50"
          >
            Đăng xuất
          </button>
        </form>
      </div>
    </div>
  );
}
