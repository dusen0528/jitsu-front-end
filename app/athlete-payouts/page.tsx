"use client"

import Link from 'next/link'
import { demoPayouts } from '@/lib/demo-payouts'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

export default function AthletePayoutsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-red-500 mb-6">정산 내역</h1>
      <Table className="bg-gray-900 border border-gray-700 rounded-md">
        <TableHeader>
          <TableRow className="bg-gray-800">
            <TableHead>금액</TableHead>
            <TableHead>상태</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {demoPayouts.map((p) => (
            <TableRow key={p.id} className="border-t border-gray-700 hover:bg-gray-800">
              <TableCell>
                <Link href={`/athlete-payouts/${p.id}`}>{p.amount}</Link>
              </TableCell>
              <TableCell>{p.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
