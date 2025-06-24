'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { SPECIALTY_OPTIONS } from '@/lib/specialties'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'

const studentSchema = z.object({
  name: z.string().min(1, '이름을 입력하세요'),
  email: z.string().email('유효한 이메일을 입력하세요'),
  phone: z.string().min(1, '전화번호를 입력하세요'),
  username: z.string().min(1, '사용자명을 입력하세요'),
  marketing: z.boolean().optional(),
  gym: z.string().optional(),
  password: z.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다'),
})

const athleteSchema = studentSchema.extend({
  account: z.string().min(1, '정산받을 계좌를 입력하세요'),
  gymAddress: z.string().optional(),
  bio: z.string().optional(),
  specialties: z.array(z.string()).optional(),
  awards: z.string().optional(),
  image: z.string().optional(),
})

type StudentForm = z.infer<typeof studentSchema>
type AthleteForm = z.infer<typeof athleteSchema>

export default function SignupPage() {
  const [tab, setTab] = useState<'student' | 'athlete'>('student')

  const studentForm = useForm<StudentForm>({
    resolver: zodResolver(studentSchema),
    defaultValues: { marketing: false },
  })
  const athleteForm = useForm<AthleteForm>({
    resolver: zodResolver(athleteSchema),
    defaultValues: { marketing: false, specialties: [] },
  })

  const onSubmitStudent = (data: StudentForm) => {
    console.log('student submit', data)
    // TODO: 연결된 API 호출
  }

  const onSubmitAthlete = (data: AthleteForm) => {
    console.log('athlete submit', data)
    // TODO: 연결된 API 호출
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl space-y-6">
        <h1 className="text-3xl font-bold text-center text-red-500">회원가입</h1>
        <Tabs value={tab} onValueChange={(v) => setTab(v as 'student' | 'athlete')} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800">
            <TabsTrigger value="student">수련생</TabsTrigger>
            <TabsTrigger value="athlete">선수</TabsTrigger>
          </TabsList>
          <TabsContent value="student" className="pt-6">
            <Form {...studentForm}>
              <form onSubmit={studentForm.handleSubmit(onSubmitStudent)} className="space-y-4">
                <FormField
                  control={studentForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이름</FormLabel>
                      <FormControl>
                        <Input placeholder="이름" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={studentForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={studentForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>전화번호</FormLabel>
                      <FormControl>
                        <Input placeholder="010-0000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={studentForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>사용자명 또는 닉네임</FormLabel>
                      <FormControl>
                        <Input placeholder="닉네임" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={studentForm.control}
                  name="marketing"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel className="!mt-0">마케팅 수신 동의</FormLabel>
                    </FormItem>
                  )}
                />
                <FormField
                  control={studentForm.control}
                  name="gym"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>현재 수련 중인 체육관 (선택)</FormLabel>
                      <FormControl>
                        <Input placeholder="체육관명 및 주소" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={studentForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>비밀번호</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="비밀번호" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">가입하기</Button>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="athlete" className="pt-6">
            <Form {...athleteForm}>
              <form onSubmit={athleteForm.handleSubmit(onSubmitAthlete)} className="space-y-4">
                <FormField
                  control={athleteForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이름</FormLabel>
                      <FormControl>
                        <Input placeholder="이름" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={athleteForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={athleteForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>전화번호</FormLabel>
                      <FormControl>
                        <Input placeholder="010-0000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={athleteForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>사용자명 또는 닉네임</FormLabel>
                      <FormControl>
                        <Input placeholder="닉네임" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
              control={athleteForm.control}
              name="marketing"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel className="!mt-0">마케팅 수신 동의</FormLabel>
                </FormItem>
              )}
            />
            <div className="flex items-center space-x-4">
              <Avatar className="w-24 h-24">
                {athleteForm.watch('image') && (
                  <AvatarImage src={athleteForm.watch('image')} alt="프로필" />
                )}
              </Avatar>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    const reader = new FileReader()
                    reader.onload = () => athleteForm.setValue('image', reader.result as string)
                    reader.readAsDataURL(file)
                  }
                }}
              />
            </div>
            <FormField
              control={athleteForm.control}
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
                      checked={athleteForm.watch('specialties')?.includes(opt)}
                      onCheckedChange={() => {
                        const current = athleteForm.getValues('specialties') || []
                        if (current.includes(opt)) {
                          athleteForm.setValue('specialties', current.filter((v) => v !== opt))
                        } else {
                          athleteForm.setValue('specialties', [...current, opt])
                        }
                      }}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
            <FormField
              control={athleteForm.control}
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
            <FormField
              control={athleteForm.control}
              name="account"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>정산받을 계좌</FormLabel>
                      <FormControl>
                        <Input placeholder="은행명 / 계좌번호" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={athleteForm.control}
                  name="gymAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>현재 운영/수련 중인 체육관명 및 주소</FormLabel>
                      <FormControl>
                        <Input placeholder="체육관명 및 주소" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={athleteForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>비밀번호</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="비밀번호" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">가입하기</Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
