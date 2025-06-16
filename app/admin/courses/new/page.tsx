'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function NewCoursePage() {
  const [title, setTitle] = useState('')
  const [instructor, setInstructor] = useState('')
  const [price, setPrice] = useState('')
  const router = useRouter()

  const onSubmit = () => {
    alert('강의가 추가되었습니다')
    router.push('/admin/courses')
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-4">
      <h1 className="text-3xl font-bold text-red-500">강의 추가</h1>
      <div className="space-y-2">
        <label className="block">
          <span className="block mb-1">제목</span>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label className="block">
          <span className="block mb-1">강사</span>
          <Input value={instructor} onChange={(e) => setInstructor(e.target.value)} />
        </label>
        <label className="block">
          <span className="block mb-1">가격</span>
          <Input value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <Button className="bg-red-600 hover:bg-red-700" onClick={onSubmit}>
          추가
        </Button>
      </div>
    </div>
  )
}
