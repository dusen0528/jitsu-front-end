import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Play } from 'lucide-react'
import { demoCourses } from '@/lib/demo-courses'

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">전체 강의</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoCourses.map((course) => (
            <Link key={course.slug} href={`/courses/${course.slug}`}>
              <Card className="bg-gray-900 border-gray-700 hover:border-red-500 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-video bg-gray-700 relative overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                          <Play className="h-5 w-5 text-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <Badge className="absolute top-3 left-3 bg-red-600 hover:bg-red-600">{course.badge}</Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{course.subtitle}</p>
                    <span className="text-red-400 font-medium">{course.salePrice}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
