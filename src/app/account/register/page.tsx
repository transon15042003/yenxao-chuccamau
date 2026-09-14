'use client';

import Link from 'next/link';
import { useActionState } from 'react';

import { signup } from '@/lib/data/customer';

export default function RegisterPage() {
  const [state, formAction, pending] = useActionState(signup, null as string | null);

  return (
    <div className="bg-[#F7F7F7] min-h-[60vh] pt-10 pb-20">
      <div className="w-[95%] max-w-md mx-auto bg-white rounded-[5px] p-6 md:p-8">
        <h1 className="text-2xl font-bold mb-6">Đăng ký</h1>
        <form action={formAction} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1 text-sm">
            Họ
            <input
              name="last_name"
              required
              className="border border-gray-300 rounded-[5px] px-3 py-2"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Tên
            <input
              name="first_name"
              required
              className="border border-gray-300 rounded-[5px] px-3 py-2"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Email
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="border border-gray-300 rounded-[5px] px-3 py-2"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Số điện thoại
            <input
              name="phone"
              type="tel"
              className="border border-gray-300 rounded-[5px] px-3 py-2"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Mật khẩu
            <input
              name="password"
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
              className="border border-gray-300 rounded-[5px] px-3 py-2"
            />
          </label>
          {typeof state === 'string' && state.length > 0 && (
            <p className="text-sm text-red-600">{state}</p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="bg-primary text-white rounded-[5px] py-2.5 font-semibold disabled:opacity-60"
          >
            {pending ? 'Đang tạo…' : 'Tạo tài khoản'}
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-6">
          Đã có tài khoản?{' '}
          <Link href="/account/login" className="text-primary underline">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
}
