"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { CourseData } from "@/lib/demo-courses"
import { useRouter } from "next/navigation"

export default function BuyNowButton({ course }: { course: CourseData }) {
  const { addItem } = useCart()
  const router = useRouter()

  return (
    <Button
      className="bg-red-600 hover:bg-red-700"
      onClick={() => {
        addItem(course)
        router.push("/checkout")
      }}
    >
      구매하기
    </Button>
  )
}
