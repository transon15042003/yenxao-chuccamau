'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState, useTransition } from 'react';

import { addCustomerAddress, deleteCustomerAddress } from '@/lib/data/customer';
import {
  getVietnamProvinces,
  VietnamProvince
} from '@/services/location.service';

type Address = {
  id: string;
  first_name?: string | null;
  last_name?: string | null;
  phone?: string | null;
  address_1?: string | null;
  city?: string | null;
  province?: string | null;
  country_code?: string | null;
};

export default function AccountAddressesClient({
  addresses
}: {
  addresses: Address[];
}) {
  const router = useRouter();
  const [provinces, setProvinces] = useState<VietnamProvince[]>([]);
  const [pendingDelete, startDelete] = useTransition();
  const [state, formAction, pending] = useActionState(addCustomerAddress, {
    success: false,
    error: null
  });

  useEffect(() => {
    getVietnamProvinces()
      .then((list) => setProvinces(list || []))
      .catch(() => setProvinces([]));
  }, []);

  useEffect(() => {
    if (state?.success) router.refresh();
  }, [state?.success, router]);

  return (
    <div className="bg-[#F7F7F7] min-h-[60vh] pt-10 pb-20">
      <div className="w-[95%] lg:w-[70%] mx-auto 2xl:max-w-[900px] bg-white rounded-[5px] p-6 md:p-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Sổ địa chỉ</h1>
          <Link href="/account" className="text-sm text-primary underline">
            ← Tài khoản
          </Link>
        </div>

        <ul className="flex flex-col gap-3 mb-10">
          {!addresses.length && <li className="text-gray-600">Chưa có địa chỉ nào.</li>}
          {addresses.map((a) => (
            <li
              key={a.id}
              className="border border-gray-200 rounded-[5px] p-4 flex justify-between gap-4"
            >
              <div className="text-sm">
                <p className="font-semibold">
                  {a.first_name} {a.last_name} · {a.phone}
                </p>
                <p>
                  {a.address_1}
                  {a.city ? `, ${a.city}` : ''}
                  {a.province ? `, ${a.province}` : ''}
                </p>
              </div>
              <button
                type="button"
                disabled={pendingDelete}
                className="text-sm text-red-600 underline"
                onClick={() =>
                  startDelete(async () => {
                    await deleteCustomerAddress(a.id);
                    router.refresh();
                  })
                }
              >
                Xóa
              </button>
            </li>
          ))}
        </ul>

        <h2 className="font-bold text-lg mb-4">Thêm địa chỉ</h2>
        <form action={formAction} className="grid gap-3 md:grid-cols-2">
          <input type="hidden" name="country_code" value="vn" />
          <input type="hidden" name="postal_code" value="00000" />
          <label className="flex flex-col gap-1 text-sm">
            Tên
            <input name="first_name" required className="border rounded-[5px] px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Họ
            <input name="last_name" required className="border rounded-[5px] px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1 text-sm md:col-span-2">
            Số điện thoại
            <input name="phone" required className="border rounded-[5px] px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1 text-sm md:col-span-2">
            Địa chỉ
            <input name="address_1" required className="border rounded-[5px] px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Quận/Huyện / Thành phố
            <input name="city" required className="border rounded-[5px] px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Tỉnh/Thành
            <select name="province" required className="border rounded-[5px] px-3 py-2">
              <option value="">Chọn tỉnh</option>
              {provinces.map((p) => (
                <option key={p.code || p.name} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>
          {state?.error && (
            <p className="text-sm text-red-600 md:col-span-2">{state.error}</p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="md:col-span-2 bg-primary text-white rounded-[5px] py-2.5 font-semibold disabled:opacity-60"
          >
            {pending ? 'Đang lưu…' : 'Lưu địa chỉ'}
          </button>
        </form>
      </div>
    </div>
  );
}
