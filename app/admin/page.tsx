const sampleUsers = [
  { id: 1, name: '김철수', type: '수련생' },
  { id: 2, name: '이영희', type: '선수' },
]

const sampleCourses = [
  { id: 1, title: 'Systematic Scrimmage' },
  { id: 2, title: 'Wrestling for BJJ' },
]

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-8">
      <h1 className="text-3xl font-bold text-red-500 mb-4">관리자 대시보드</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">회원 관리</h2>
        <ul className="space-y-1 text-gray-300">
          {sampleUsers.map((u) => (
            <li key={u.id}>{u.name} - {u.type}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">강의 관리</h2>
        <ul className="space-y-1 text-gray-300">
          {sampleCourses.map((c) => (
            <li key={c.id}>{c.title}</li>
          ))}
        </ul>
      </section>

    </div>
  )
}
