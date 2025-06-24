import { CourseData } from './demo-courses'

export const demoUserPurchases: CourseData[] = [
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
