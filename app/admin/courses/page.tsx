import Link from 'next/link'
import { demoCourses } from '@/lib/demo-courses'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Button } from '@/components/ui/button'

export default function AdminCoursesPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-red-500 mb-6">강의 등록</h1>
      <div className="mb-4">
        <Link href="/admin/courses/new">
          <Button className="bg-red-600 hover:bg-red-700">강의 추가</Button>
        </Link>
      </div>
      <Table className="bg-gray-900 border border-gray-700 rounded-md">
        <TableHeader>
          <TableRow className="bg-gray-800">
            <TableHead>제목</TableHead>
            <TableHead>강사</TableHead>
            <TableHead>가격</TableHead>
            <TableHead className="text-right">작업</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {demoCourses.map((c) => (
            <TableRow key={c.slug} className="border-t border-gray-700">
              <TableCell>{c.title}</TableCell>
              <TableCell>{c.instructor}</TableCell>
              <TableCell>{c.salePrice}</TableCell>
              <TableCell className="text-right space-x-2">
                <Link href={`/admin/courses/${c.slug}`} className="inline-block">
                  <Button size="sm" variant="secondary">수정</Button>
                </Link>
                <Button size="sm" variant="destructive">삭제</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
