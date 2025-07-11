import Image from 'next/image'
import Link from 'next/link'
import { demoAthletes } from '@/lib/demo-athletes'

export default function InstructorsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-red-500 mb-6">선수 목록</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoAthletes.map((athlete) => (
          <Link
            key={athlete.id}
            href={`/instructors/${athlete.id}`}
            className="bg-gray-900 border border-gray-700 rounded-lg p-6 flex flex-col items-center text-center hover:border-red-500 transition-colors"
          >
            <Image
              src={athlete.image}
              alt={athlete.name}
              width={160}
              height={160}
              className="rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold mb-1">{athlete.name}</h3>
            <p className="text-sm text-gray-400">{athlete.discipline}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
