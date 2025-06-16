import { demoUserPurchases } from '@/lib/demo-user-purchases'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

export default function UserMyPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6">
      <h1 className="text-3xl font-bold text-red-500">마이페이지</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoUserPurchases.map((course) => (
          <Link key={course.slug} href={`/courses/${course.slug}`}
            className="block">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-400">{course.instructor}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
