import { notFound } from 'next/navigation'
import { demoMembers } from '@/lib/demo-members'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Props { params: { id: string } }

export default function EditMemberPage({ params }: Props) {
  const member = demoMembers.find((m) => m.id === Number(params.id))
  if (!member) return notFound()

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-4">
      <h1 className="text-3xl font-bold text-red-500">회원 수정</h1>
      <div className="space-y-2">
        <label className="block">
          <span className="block mb-1">이름</span>
          <Input defaultValue={member.name} />
        </label>
        <label className="block">
          <span className="block mb-1">이메일</span>
          <Input defaultValue={member.email} />
        </label>
        <label className="block">
          <span className="block mb-1">권한</span>
          <Input defaultValue={member.role} />
        </label>
        <Button className="bg-red-600 hover:bg-red-700">저장</Button>
      </div>
    </div>
  )
}
