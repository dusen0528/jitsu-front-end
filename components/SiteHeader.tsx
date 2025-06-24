'use client'

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import CartLink from '@/components/CartLink'
import { Search, User, Menu } from 'lucide-react'

export default function SiteHeader() {
  return (
    <header className="border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-red-500">
            FIGHTING KOREA
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/courses" className="hover:text-red-400 transition-colors">
              전체 강의
            </Link>
            <Link href="/instructors" className="hover:text-red-400 transition-colors">
              선수 목록
            </Link>
            <Link href="/categories" className="hover:text-red-400 transition-colors">
              종목
            </Link>
            <Link href="/about" className="hover:text-red-400 transition-colors">
              소개
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Input
                type="search"
                placeholder="강의 검색..."
                className="w-64 bg-gray-900 border-gray-700 text-white placeholder-gray-400"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-white hover:text-red-400">
                <User className="h-4 w-4 mr-2" /> 로그인
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                회원가입
              </Button>
            </Link>
            <CartLink />
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
