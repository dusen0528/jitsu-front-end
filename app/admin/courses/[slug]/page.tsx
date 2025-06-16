"use client"

import { useState } from 'react'
import { notFound, useRouter } from 'next/navigation'
import { demoCourses } from '@/lib/demo-courses'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Props { params: { slug: string } }

export default function EditCoursePage({ params }: Props) {
  const router = useRouter()
  const course = demoCourses.find((c) => c.slug === params.slug)
  if (!course) return notFound()

  const [title, setTitle] = useState(course.title)
  const [instructor, setInstructor] = useState(course.instructor)
  const [price, setPrice] = useState(course.salePrice)

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-4">
      <h1 className="text-3xl font-bold text-red-500">강의 수정</h1>
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
        <Button
          className="bg-red-600 hover:bg-red-700"
          onClick={() => {
            alert('저장되었습니다')
            router.push('/admin/courses')
          }}
        >
          저장
        </Button>
      </div>
    </div>
  )
}
