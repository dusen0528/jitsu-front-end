"use client"

import { useState } from 'react'
import { demoPayouts, PayoutRequest } from '@/lib/demo-payouts'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

export default function PayoutsPage() {
  const [payouts, setPayouts] = useState<PayoutRequest[]>(demoPayouts)

  const updateStatus = (id: number, status: '대기' | '완료') => {
    setPayouts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status } : p)),
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-red-500 mb-6">정산 관리</h1>
      <Table className="bg-gray-900 border border-gray-700 rounded-md">
        <TableHeader>
          <TableRow className="bg-gray-800">
            <TableHead>선수</TableHead>
            <TableHead>금액</TableHead>
            <TableHead>상태</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payouts.map((p) => (
            <TableRow key={p.id} className="border-t border-gray-700">
              <TableCell>{p.athlete}</TableCell>
              <TableCell>{p.amount}</TableCell>
              <TableCell>
                <select
                  value={p.status}
                  onChange={(e) =>
                    updateStatus(p.id, e.target.value as '대기' | '완료')
                  }
                  className="bg-gray-700 border border-gray-600 rounded px-2 py-1 text-white"
                >
                  <option value="대기">대기</option>
                  <option value="완료">완료</option>
                </select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
