"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function MomoReturnPage() {
  const params = useSearchParams();
  const code = params.get("resultCode");
  const ok = code === "0";

  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-semibold">
        {ok ? "Thanh toán MoMo thành công" : "Thanh toán MoMo thất bại"}
      </h1>
      <p className="text-sm text-gray-600">Mã: {code || "—"}</p>
      <Link href="/" className="underline">
        Về trang chủ
      </Link>
    </div>
  );
}
