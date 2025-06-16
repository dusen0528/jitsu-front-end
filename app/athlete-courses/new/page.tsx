import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function AthleteCourseNewPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-4">
      <h1 className="text-3xl font-bold text-red-500">강의 등록</h1>
      <div className="space-y-2">
        <label className="block">
          <span className="block mb-1">제목</span>
          <Input />
        </label>
        <label className="block">
          <span className="block mb-1">카테고리</span>
          <Input />
        </label>
        <label className="block">
          <span className="block mb-1">가격</span>
          <Input />
        </label>
        <Button className="bg-red-600 hover:bg-red-700">등록</Button>
      </div>
    </div>
  )
}
