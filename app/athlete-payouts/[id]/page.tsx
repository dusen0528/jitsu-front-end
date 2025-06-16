"use client"

import { notFound } from 'next/navigation'
import { demoPayouts } from '@/lib/demo-payouts'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

interface Props { params: { id: string } }

export default function AthletePayoutDetailPage({ params }: Props) {
  const payout = demoPayouts.find((p) => p.id === Number(params.id))
  if (!payout) return notFound()

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-red-500 mb-6">정산 상세</h1>
      <p className="mb-4">총 금액: {payout.amount}</p>
      <Table className="bg-gray-900 border border-gray-700 rounded-md">
        <TableHeader>
          <TableRow className="bg-gray-800">
            <TableHead>강의</TableHead>
            <TableHead>금액</TableHead>
            <TableHead>생성일자</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payout.details.map((d, idx) => (
            <TableRow key={idx} className="border-t border-gray-700">
              <TableCell>{d.title}</TableCell>
              <TableCell>{d.amount}</TableCell>
              <TableCell>{d.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
