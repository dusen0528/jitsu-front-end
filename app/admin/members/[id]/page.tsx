'use client'

import { useState } from 'react'
import { notFound, useRouter } from 'next/navigation'
import { demoMembers } from '@/lib/demo-members'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Props { params: { id: string } }

export default function EditMemberPage({ params }: Props) {
  const router = useRouter()
  const member = demoMembers.find((m) => m.id === Number(params.id))
  if (!member) return notFound()

  const [name, setName] = useState(member.name)
  const [email, setEmail] = useState(member.email)
  const [role, setRole] = useState(member.role)

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-4">
      <h1 className="text-3xl font-bold text-red-500">회원 수정</h1>
      <div className="space-y-2">
        <label className="block">
          <span className="block mb-1">이름</span>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="block">
          <span className="block mb-1">이메일</span>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="block">
          <span className="block mb-1">권한</span>
          <Input value={role} onChange={(e) => setRole(e.target.value)} />
        </label>
        <Button
          className="bg-red-600 hover:bg-red-700"
          onClick={() => {
            alert('수정되었습니다')
            router.push('/admin/members')
          }}
        >
          저장
        </Button>
      </div>
    </div>
  )
}
