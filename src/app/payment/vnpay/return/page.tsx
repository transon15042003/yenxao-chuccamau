"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function VnpayReturnPage() {
  const params = useSearchParams();
  const code = params.get("vnp_ResponseCode");
  const ok = code === "00";

  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-semibold">
        {ok ? "Thanh toán VNPay thành công" : "Thanh toán VNPay thất bại"}
      </h1>
      <p className="text-sm text-gray-600">Mã: {code || "—"}</p>
      <Link href="/" className="underline">
        Về trang chủ
      </Link>
    </div>
  );
}
