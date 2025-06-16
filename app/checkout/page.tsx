"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"

export default function CheckoutPage() {
  const { items } = useCart()

  const total = items
    .reduce((sum, item) => {
      const price = parseInt(item.salePrice.replace(/[^0-9]/g, ""))
      return sum + price
    }, 0)
    .toLocaleString()

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6">
      <h1 className="text-3xl font-bold text-red-500">결제</h1>
      {items.length === 0 ? (
        <p className="text-gray-400">결제할 강의가 없습니다.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.slug}
              className="flex justify-between border border-gray-700 p-4 rounded"
            >
              <span>{item.title}</span>
              <span className="text-red-400">{item.salePrice}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-lg">
            <span>총 결제 금액</span>
            <span className="text-red-400">₩{total}</span>
          </div>
          <div className="space-y-2">
            <Button className="w-full bg-red-600 hover:bg-red-700">PG사 결제</Button>
            <Button className="w-full bg-gray-800 hover:bg-gray-700">
              계좌이체 안내
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
