import { notFound } from 'next/navigation'
import Image from 'next/image'
import { demoCourses } from '@/lib/demo-courses'
import BuyNowButton from '@/components/BuyNowButton'
import SiteHeader from '@/components/SiteHeader'

interface Props { params: { slug: string } }

export default function CourseDetailPage({ params }: Props) {
  const course = demoCourses.find((c) => c.slug === params.slug)
  if (!course) return notFound()
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <div className="container mx-auto px-4 py-10 space-y-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="aspect-video bg-gray-800 relative">
              <video
                src={course.video}
                poster={course.image}
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <p className="text-gray-400">{course.subtitle}</p>
            <p className="text-gray-300">{course.description}</p>
            <div className="flex items-center gap-2 text-2xl font-bold text-red-400">
              <span>{course.salePrice}</span>
              <span className="text-base text-gray-500 line-through">{course.originalPrice}</span>
            </div>
            <BuyNowButton course={course} />
          </div>
        </div>
      </div>
    </div>
  )
}
