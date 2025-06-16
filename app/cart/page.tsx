"use client"

import { useCart } from '@/lib/cart-context'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function CartPage() {
  const { items, removeItem, clear } = useCart()
  const router = useRouter()

  const handleCheckout = () => {
    clear()              // 장바구니 비우기
    router.push('/checkout') // 결제 페이지 이동
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-red-500 mb-6">장바구니</h1>
      {items.length === 0 ? (
        <p className="text-gray-400">장바구니가 비어 있습니다.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.slug}
              className="border border-gray-700 rounded p-4 flex justify-between"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-400">{item.instructor}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">{item.salePrice}</span>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => removeItem(item.slug)}
                >
                  삭제
                </Button>
              </div>
            </div>
          ))}
          <Button
            className="bg-red-600 hover:bg-red-700"
            onClick={handleCheckout}
          >
            결제 진행
          </Button>
        </div>
      )}
    </div>
  )
}
