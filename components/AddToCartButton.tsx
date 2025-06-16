"use client"

import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CourseData } from '@/lib/demo-courses'
import { useCart } from '@/lib/cart-context'

export default function AddToCartButton({ course }: { course: CourseData }) {
  const { addItem } = useCart()
  return (
    <Button
      className="w-full bg-red-600 hover:bg-red-700"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        addItem(course)
      }}
    >
      <ShoppingCart className="h-4 w-4 mr-2" />
      장바구니 추가
    </Button>
  )
}
