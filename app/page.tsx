import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Play, ShoppingCart, Search, User, Menu } from "lucide-react"

export default function HomePage() {
  const categories = [
    {
      title: "노기 주짓수",
      subtitle: "No-Gi Jiu-Jitsu",
      description: "도복 없이 하는 주짓수 기술",
      courseCount: "45개 강의",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "도복 주짓수",
      subtitle: "Gi Jiu-Jitsu",
      description: "전통적인 도복 주짓수",
      courseCount: "38개 강의",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "레슬링",
      subtitle: "Wrestling",
      description: "테이크다운과 그라운드 컨트롤",
      courseCount: "22개 강의",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "MMA",
      subtitle: "Mixed Martial Arts",
      description: "종합격투기 기술",
      courseCount: "31개 강의",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "복싱",
      subtitle: "Boxing",
      description: "타격 기술과 풋워크",
      courseCount: "18개 강의",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "무에타이",
      subtitle: "Muay Thai",
      description: "킥복싱과 클린치 기술",
      courseCount: "25개 강의",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const featuredCourses = [
    {
      title: "Systematically Attacking The Scrimmage",
      subtitle: "Lower Body Takedowns",
      instructor: "Gordon Ryan",
      rating: 4.9,
      students: 1234,
      duration: "4시간 30분",
      originalPrice: "₩199,000",
      salePrice: "₩149,000",
      image: "/placeholder.svg?height=200&width=300",
      badge: "노기 주짓수",
    },
    {
      title: "Advanced Guard Passing System",
      subtitle: "Pressure Passing Fundamentals",
      instructor: "Bernardo Faria",
      rating: 4.8,
      students: 987,
      duration: "3시간 45분",
      originalPrice: "₩179,000",
      salePrice: "₩129,000",
      image: "/placeholder.svg?height=200&width=300",
      badge: "도복 주짓수",
    },
    {
      title: "Wrestling for BJJ",
      subtitle: "Takedown Mastery",
      instructor: "John Danaher",
      rating: 4.9,
      students: 1567,
      duration: "5시간 20분",
      originalPrice: "₩229,000",
      salePrice: "₩169,000",
      image: "/placeholder.svg?height=200&width=300",
      badge: "레슬링",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Promotional Banner */}
      <div className="bg-red-600 text-center py-2 text-sm">
        <p>올해의 빅 세일 - 격투기 온라인 강의 플랫폼</p>
      </div>

      {/* Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-red-500">
              FIGHTING KOREA
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/courses" className="hover:text-red-400 transition-colors">
                전체 강의
              </Link>
              <Link href="/instructors" className="hover:text-red-400 transition-colors">
                강사진
              </Link>
              <Link href="/categories" className="hover:text-red-400 transition-colors">
                카테고리
              </Link>
              <Link href="/about" className="hover:text-red-400 transition-colors">
                소개
              </Link>
            </nav>

            {/* Search and Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Input
                  type="search"
                  placeholder="강의 검색..."
                  className="w-64 bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Button variant="ghost" size="sm" className="text-white hover:text-red-400">
                <User className="h-4 w-4 mr-2" />
                로그인
              </Button>
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                회원가입
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-red-500">격투기</span> 온라인 강의
                  <br />
                  플랫폼
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  세계 최고 수준의 격투기 선수들과 코치들이 직접 가르치는 전문 기술을 온라인으로 배워보세요.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8">
                  강의 둘러보기
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-black hover:bg-gray-800 text-lg px-8"
                >
                  무료 체험하기
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Hero Video"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">강의 카테고리</h2>
            <p className="text-xl text-gray-400">다양한 격투기 분야의 전문 강의를 만나보세요</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-red-500 transition-colors group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-700 relative overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{category.title}</h3>
                      <p className="text-red-400 text-sm font-medium">{category.subtitle}</p>
                    </div>
                    <p className="text-gray-400 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-red-400 font-semibold">{category.courseCount}</span>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400">
                        바로가기 →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">추천 강의</h2>
            <p className="text-xl text-gray-400">가장 인기 있는 강의들을 만나보세요</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 hover:border-red-500 transition-all duration-300 group"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-video bg-gray-700 relative overflow-hidden">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                          <Play className="h-5 w-5 text-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <Badge className="absolute top-3 left-3 bg-red-600 hover:bg-red-600">{course.badge}</Badge>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1 line-clamp-2">{course.title}</h3>
                      <p className="text-gray-400 text-sm">{course.subtitle}</p>
                    </div>

                    <p className="text-red-400 font-medium mb-3">{course.instructor}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                      <span>👥 {course.students.toLocaleString()}</span>
                      <span>⏱️ {course.duration}</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-red-400">{course.salePrice}</span>
                        <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      장바구니 추가
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800">
              전체 강의 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-4">FIGHTING KOREA</h3>
              <p className="text-gray-400 mb-4">세계 최고 수준의 격투기 온라인 강의 플랫폼</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                  <span className="text-xs">@</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                  <span className="text-xs">▶</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">강의</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-red-400">
                    노기 주짓수
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400">
                    도복 주짓수
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400">
                    레슬링
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400">
                    MMA
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400">
                    복싱
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">지원</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-red-400">
                    고객센터
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400">
                    환불정책
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400">
                    이용약관
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400">
                    개인정보처리방침
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">회사</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-red-400">
                    회사소개
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400">
                    강사 지원
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400">
                    제휴문의
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400">
                    채용정보
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fighting Korea. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
