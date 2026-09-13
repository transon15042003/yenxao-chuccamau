"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

/**
 * Local mock gateway page (PAYMENT_MOCK=1).
 * Confirms payment on Medusa then redirects to order result.
 */
export default function PaymentMockPage() {
  const params = useSearchParams();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const provider = params.get("provider") || "vnpay";
    const sessionId = params.get("session_id");
    const cartId = params.get("cart_id");
    const amount = params.get("amount");
    if (!sessionId || !cartId) {
      setError("Thiếu session_id hoặc cart_id");
      return;
    }

    const backend =
      process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000";
    const key = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "";

    fetch(`${backend}/store/payment/confirm`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-publishable-api-key": key,
      },
      body: JSON.stringify({
        provider,
        session_id: sessionId,
        cart_id: cartId,
        amount: amount ? Number(amount) : undefined,
        mock: true,
      }),
    })
      .then(async (r) => {
        const data = await r.json();
        if (!r.ok || !data.order_id) {
          throw new Error(data.message || `confirm ${r.status}`);
        }
        router.replace(`/order/${data.order_id}/result`);
      })
      .catch((e) => setError(e.message || "Thanh toán mock thất bại"));
  }, [params, router]);

  return (
    <div className="min-h-[40vh] flex items-center justify-center p-8">
      <p className="text-lg">
        {error ? `Lỗi: ${error}` : "Đang xác nhận thanh toán (mock)..."}
      </p>
    </div>
  );
}
