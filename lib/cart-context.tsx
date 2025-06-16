"use client"

import { createContext, useContext, useState, ReactNode } from 'react'
import { CourseData } from '@/lib/demo-courses'

interface CartItem extends CourseData {}

interface CartContextType {
  items: CartItem[]
  addItem: (course: CourseData) => void
  removeItem: (slug: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (course: CourseData) => {
    setItems((prev) =>
      prev.find((item) => item.slug === course.slug) ? prev : [...prev, course],
    )
  }

  const removeItem = (slug: string) => {
    setItems((prev) => prev.filter((item) => item.slug !== slug))
  }

  const clear = () => setItems([])

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
