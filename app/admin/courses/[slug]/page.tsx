import { notFound } from 'next/navigation'
import { demoCourses } from '@/lib/demo-courses'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Props { params: { slug: string } }

export default function EditCoursePage({ params }: Props) {
  const course = demoCourses.find((c) => c.slug === params.slug)
  if (!course) return notFound()

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-4">
      <h1 className="text-3xl font-bold text-red-500">강의 수정</h1>
      <div className="space-y-2">
        <label className="block">
          <span className="block mb-1">제목</span>
          <Input defaultValue={course.title} />
        </label>
        <label className="block">
          <span className="block mb-1">강사</span>
          <Input defaultValue={course.instructor} />
        </label>
        <label className="block">
          <span className="block mb-1">가격</span>
          <Input defaultValue={course.salePrice} />
        </label>
        <Button className="bg-red-600 hover:bg-red-700">저장</Button>
      </div>
    </div>
  )
}
