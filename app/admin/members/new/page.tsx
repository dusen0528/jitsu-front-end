import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function NewMemberPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-4">
      <h1 className="text-3xl font-bold text-red-500">회원 추가</h1>
      <div className="space-y-2">
        <label className="block">
          <span className="block mb-1">이름</span>
          <Input />
        </label>
        <label className="block">
          <span className="block mb-1">이메일</span>
          <Input />
        </label>
        <label className="block">
          <span className="block mb-1">권한</span>
          <Input />
        </label>
        <Button className="bg-red-600 hover:bg-red-700">추가</Button>
      </div>
    </div>
  )
}
