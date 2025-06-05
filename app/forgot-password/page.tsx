'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'

const schema = z.object({
  email: z.string().email('유효한 이메일을 입력하세요'),
})

type FormType = z.infer<typeof schema>

export default function ForgotPasswordPage() {
  const form = useForm<FormType>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormType) => {
    console.log('forgot password', data)
    // TODO: API 연동
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-3xl font-bold text-center text-red-500">비밀번호 찾기</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
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
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
              이메일 전송
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
