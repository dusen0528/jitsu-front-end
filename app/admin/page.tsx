import Link from 'next/link'

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-red-500 mb-8">관리자 대시보드</h1>
      <ul className="space-y-4">
        <li className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <Link href="/admin/members" className="block">
            <h2 className="text-xl font-semibold mb-2">회원 관리</h2>
            <p className="text-gray-400">회원 목록을 조회하고 수정/삭제할 수 있습니다</p>
          </Link>
        </li>
        <li className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <Link href="/admin/courses" className="block">
            <h2 className="text-xl font-semibold mb-2">강의 관리</h2>
            <p className="text-gray-400">강의를 등록하고 수정/삭제할 수 있습니다</p>
          </Link>
        </li>
        <li className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <Link href="/admin/payouts" className="block">
            <h2 className="text-xl font-semibold mb-2">정산 관리</h2>
            <p className="text-gray-400">출금 요청 내역 확인</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}
