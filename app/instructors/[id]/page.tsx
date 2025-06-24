import { notFound } from 'next/navigation'
import Image from 'next/image'
import { demoAthletes } from '@/lib/demo-athletes'

interface Props { params: { id: string } }

export default function AthleteProfile({ params }: Props) {
  const athlete = demoAthletes.find((a) => a.id.toString() === params.id)
  if (!athlete) return notFound()
  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <Image src={athlete.image} alt={athlete.name} width={200} height={200} className="rounded-full mb-4 object-cover" />
      <h1 className="text-3xl font-bold mb-2">{athlete.name}</h1>
      <p className="text-gray-400">{athlete.discipline}</p>
    </div>
  )
}
