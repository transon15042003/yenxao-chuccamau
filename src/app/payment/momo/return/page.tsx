'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function MomoReturnInner() {
  const params = useSearchParams();
  const code = params.get('resultCode');
  const ok = code === '0';

  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-semibold">
        {ok ? 'Thanh toán MoMo thành công' : 'Thanh toán MoMo thất bại'}
      </h1>
      <p className="text-sm text-gray-600">Mã: {code || '—'}</p>
      <Link href="/" className="underline">
        Về trang chủ
      </Link>
    </div>
  );
}

export default function MomoReturnPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[40vh] flex items-center justify-center p-8">
          <p>Đang tải...</p>
        </div>
      }
    >
      <MomoReturnInner />
    </Suspense>
  );
}
