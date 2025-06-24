'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function AthleteCourseNewPage() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  const onSubmit = () => {
    alert(`강의가 등록되었습니다\n설명: ${description}`)
    router.push('/athlete-courses')
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-4">
      <h1 className="text-3xl font-bold text-red-500">강의 등록</h1>
      <div className="space-y-2">
        <label className="block">
          <span className="block mb-1">제목</span>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label className="block">
          <span className="block mb-1">카테고리</span>
          <Input value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <label className="block">
          <span className="block mb-1">가격</span>
          <Input value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label className="block">
          <span className="block mb-1">상세 설명</span>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <Button className="bg-red-600 hover:bg-red-700" onClick={onSubmit}>
          등록
        </Button>
      </div>
    </div>
  )
}
