'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function NewMemberPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const router = useRouter()

  const onSubmit = () => {
    alert('회원이 추가되었습니다')
    router.push('/admin/members')
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-4">
      <h1 className="text-3xl font-bold text-red-500">회원 추가</h1>
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
        <Button className="bg-red-600 hover:bg-red-700" onClick={onSubmit}>
          추가
        </Button>
      </div>
    </div>
  )
}
