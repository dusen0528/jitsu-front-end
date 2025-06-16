"use client"

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cart-context'

export default function CartLink() {
  const { items } = useCart()
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="h-5 w-5" />
      {items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {items.length}
        </span>
      )}
    </Link>
  )
}
