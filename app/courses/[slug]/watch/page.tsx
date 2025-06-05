import { notFound } from 'next/navigation'
import { demoCourses } from '@/lib/demo-courses'

interface Props { params: { slug: string } }

export default function CourseWatchPage({ params }: Props) {
  const course = demoCourses.find((c) => c.slug === params.slug)
  if (!course) return notFound()
  return (
    <div className="min-h-screen bg-black text-white py-10 flex items-center justify-center">
      <div className="w-full max-w-3xl space-y-6 px-4">
        <h1 className="text-2xl font-bold">{course.title}</h1>
        <div className="aspect-video bg-gray-800">
          <video src={course.video} controls className="w-full h-full object-cover" />
        </div>
        <p className="text-gray-400 text-sm">구매한 사용자 전용 페이지 (데모)</p>
      </div>
    </div>
  )
}
