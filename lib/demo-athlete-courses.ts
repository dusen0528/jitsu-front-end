import { CourseData } from './demo-courses'

export const demoAthleteCourses: CourseData[] = [
  {
    slug: 'my-first-course',
    title: 'My First Grappling Course',
    subtitle: 'Basic Takedowns',
    instructor: '홍길동',
    rating: 4.7,
    students: 120,
    duration: '2시간',
    originalPrice: '₩99,000',
    salePrice: '₩79,000',
    image: '/placeholder.svg?height=200&width=300',
    badge: '주짓수(노기)',
    description: '노기 주짓수 테이크다운 기본기',
    video: '/sample.mp4',
  },
  {
    slug: 'advanced-submissions',
    title: 'Advanced Submission Attacks',
    subtitle: 'Chokes and Locks',
    instructor: '홍길동',
    rating: 4.8,
    students: 80,
    duration: '3시간',
    originalPrice: '₩129,000',
    salePrice: '₩99,000',
    image: '/placeholder.svg?height=200&width=300',
    badge: 'MMA',
    description: '서브미션 공격 심화',
    video: '/sample.mp4',
  },
]
