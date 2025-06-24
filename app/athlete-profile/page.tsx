'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { SPECIALTY_OPTIONS } from '@/lib/specialties'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'

const profileSchema = z.object({
  bio: z.string().optional(),
  specialties: z.array(z.string()).optional(),
  gym: z.string().optional(),
  awards: z.string().optional(),
})

export default function AthleteProfilePage() {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      specialties: [],
    },
  })
  const [image, setImage] = useState<string | null>(null)

  const onSubmit = (data: z.infer<typeof profileSchema>) => {
    console.log('profile submit', data)
    // TODO: 연결된 API 호출
  }

  const toggleSpecialty = (value: string) => {
    const current = form.getValues('specialties') || []
    if (current.includes(value)) {
      form.setValue('specialties', current.filter((v) => v !== value))
    } else {
      form.setValue('specialties', [...current, value])
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl space-y-6">
        <h1 className="text-3xl font-bold text-center text-red-500">선수 프로필 설정</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-24 h-24">
                {image && <AvatarImage src={image} alt="프로필 이미지" />}
              </Avatar>
              <Input type="file" accept="image/*" onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  const reader = new FileReader()
                  reader.onload = () => setImage(reader.result as string)
                  reader.readAsDataURL(file)
                }
              }} />
            </div>
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>간단한 자기소개</FormLabel>
                  <FormControl>
                    <Input placeholder="자기소개" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <FormLabel className="mb-2 block">전문분야</FormLabel>
              <div className="grid grid-cols-2 gap-2">
                {SPECIALTY_OPTIONS.map((opt) => (
                  <label key={opt} className="flex items-center space-x-2 text-sm">
                    <Checkbox
                      checked={form.watch('specialties')?.includes(opt)}
                      onCheckedChange={() => toggleSpecialty(opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
            <FormField
              control={form.control}
              name="gym"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>체육관명 및 위치</FormLabel>
                  <FormControl>
                    <Input placeholder="체육관명 및 위치" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="awards"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>수상경력</FormLabel>
                  <FormControl>
                    <Input placeholder="예: 2023 전국 대회 우승" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">저장하기</Button>

            <div className="text-center mt-4 space-y-2">
              <Link href="/payout-request" className="text-red-400 underline">정산 신청하기</Link>
              <div>
                <Link href="/athlete-payouts" className="text-red-400 underline">정산 내역 보기</Link>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
