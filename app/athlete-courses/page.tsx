'use client'

import Link from 'next/link'
import { useState } from 'react'
import { demoAthleteCourses } from '@/lib/demo-athlete-courses'
import type { CourseData } from '@/lib/demo-courses'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Button } from '@/components/ui/button'

export default function AthleteCoursesPage() {
  const [courses, setCourses] = useState<CourseData[]>(demoAthleteCourses)

  const remove = (slug: string) => {
    setCourses((prev) => prev.filter((c) => c.slug !== slug))
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-red-500 mb-6">내 강의 관리</h1>
      <div className="mb-4">
        <Link href="/athlete-courses/new">
          <Button className="bg-red-600 hover:bg-red-700">강의 등록</Button>
        </Link>
      </div>
      <Table className="bg-gray-900 border border-gray-700 rounded-md">
        <TableHeader>
          <TableRow className="bg-gray-800">
            <TableHead>제목</TableHead>
            <TableHead>카테고리</TableHead>
            <TableHead>조회수</TableHead>
            <TableHead className="text-right">작업</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((c) => (
            <TableRow key={c.slug} className="border-t border-gray-700">
              <TableCell>{c.title}</TableCell>
              <TableCell>{c.badge}</TableCell>
              <TableCell>{c.students.toLocaleString()}</TableCell>
              <TableCell className="text-right space-x-2">
                <Link href={`/athlete-courses/${c.slug}`}>
                  <Button size="sm" variant="secondary">수정</Button>
                </Link>
                <Button size="sm" variant="destructive" onClick={() => remove(c.slug)}>삭제</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
