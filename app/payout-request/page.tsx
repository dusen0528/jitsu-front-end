import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function PayoutRequestPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-3xl font-bold text-center text-red-500">정산 신청</h1>
        <label className="block">
          <span className="block mb-1">출금 금액</span>
          <Input placeholder="₩" />
        </label>
        <Button className="w-full bg-red-600 hover:bg-red-700">신청하기</Button>
      </div>
    </div>
  )
}
