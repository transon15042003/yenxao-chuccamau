import Link from 'next/link';
import { redirect } from 'next/navigation';

import { retrieveCustomer } from '@/lib/data/customer';
import { listOrders } from '@/lib/data/orders';
import { transformOrder } from '@/lib/medusa-adapter/order';

export default async function AccountOrdersPage() {
  const customer = await retrieveCustomer();
  if (!customer) {
    redirect('/account/login');
  }

  const orders = await listOrders(20, 0);

  return (
    <div className="bg-[#F7F7F7] min-h-[60vh] pt-10 pb-20">
      <div className="w-[95%] lg:w-[70%] mx-auto 2xl:max-w-[900px] bg-white rounded-[5px] p-6 md:p-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Đơn hàng của tôi</h1>
          <Link href="/account" className="text-sm text-primary underline">
            ← Tài khoản
          </Link>
        </div>

        {!orders?.length ? (
          <p className="text-gray-600">Bạn chưa có đơn hàng nào.</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {orders.map((raw) => {
              const order = transformOrder(raw);
              return (
                <li
                  key={raw.id}
                  className="border border-gray-200 rounded-[5px] p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
                >
                  <div>
                    <p className="font-semibold">
                      Mã:{' '}
                      <Link href={`/order/${raw.id}/result`} className="text-primary underline">
                        {order.code}
                      </Link>
                    </p>
                    <p className="text-sm text-gray-600">
                      {order.orderAt
                        ? new Date(order.orderAt).toLocaleString('vi-VN')
                        : '—'}{' '}
                      · {order.status} · {order.paymentStatus}
                    </p>
                    <p className="text-sm">
                      {order.items.length} sản phẩm ·{' '}
                      {order.items
                        .reduce((s, i) => s + i.price * i.quantity, 0)
                        .toLocaleString('vi-VN')}{' '}
                      VND
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
