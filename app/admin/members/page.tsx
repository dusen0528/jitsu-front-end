import Link from 'next/link'
import { demoMembers } from '@/lib/demo-members'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Button } from '@/components/ui/button'

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-red-500 mb-6">회원 관리</h1>
      <div className="mb-4">
        <Link href="/admin/members/new">
          <Button className="bg-red-600 hover:bg-red-700">회원 추가</Button>
        </Link>
      </div>
      <Table className="bg-gray-900 border border-gray-700 rounded-md">
        <TableHeader>
          <TableRow className="bg-gray-800">
            <TableHead>이름</TableHead>
            <TableHead>이메일</TableHead>
            <TableHead>권한</TableHead>
            <TableHead className="text-right">작업</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {demoMembers.map((m) => (
            <TableRow key={m.id} className="border-t border-gray-700">
              <TableCell>{m.name}</TableCell>
              <TableCell>{m.email}</TableCell>
              <TableCell>{m.role}</TableCell>
              <TableCell className="text-right space-x-2">
                <Link href={`/admin/members/${m.id}`} className="inline-block">
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
