export interface CourseData {
  slug: string
  title: string
  subtitle: string
  instructor: string
  rating: number
  students: number
  duration: string
  originalPrice: string
  salePrice: string
  image: string
  badge: string
  description: string
  video: string
}

export const demoCourses: CourseData[] = [
  {
    slug: 'systematic-scrimmage',
    title: 'Systematically Attacking The Scrimmage',
    subtitle: 'Lower Body Takedowns',
    instructor: 'Gordon Ryan',
    rating: 4.9,
    students: 1234,
    duration: '4시간 30분',
    originalPrice: '₩199,000',
    salePrice: '₩149,000',
    image: '/placeholder.svg?height=200&width=300',
    badge: '노기 주짓수',
    description: '하체 테이크다운을 체계적으로 공략하는 방법을 다룹니다.',
    video: '/sample.mp4',
  },
  {
    slug: 'advanced-guard-passing',
    title: 'Advanced Guard Passing System',
    subtitle: 'Pressure Passing Fundamentals',
    instructor: 'Bernardo Faria',
    rating: 4.8,
    students: 987,
    duration: '3시간 45분',
    originalPrice: '₩179,000',
    salePrice: '₩129,000',
    image: '/placeholder.svg?height=200&width=300',
    badge: '도복 주짓수',
    description: '압박 패스의 기본을 심도 있게 배웁니다.',
    video: '/sample.mp4',
  },
  {
    slug: 'wrestling-for-bjj',
    title: 'Wrestling for BJJ',
    subtitle: 'Takedown Mastery',
    instructor: 'John Danaher',
    rating: 4.9,
    students: 1567,
    duration: '5시간 20분',
    originalPrice: '₩229,000',
    salePrice: '₩169,000',
    image: '/placeholder.svg?height=200&width=300',
    badge: '레슬링',
    description: '레슬링 기술을 활용한 주짓수 테이크다운 마스터하기.',
    video: '/sample.mp4',
  },
]
