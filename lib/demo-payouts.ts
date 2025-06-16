export interface EarningDetail {
  title: string
  amount: string
  createdAt: string
}

export interface PayoutRequest {
  id: number
  athlete: string
  amount: string
  status: '대기' | '완료'
  details: EarningDetail[]
}

export const demoPayouts: PayoutRequest[] = [
  {
    id: 1,
    athlete: '김철수',
    amount: '₩300,000',
    status: '대기',
    details: [
      { title: 'Systematically Attacking The Scrimmage', amount: '₩200,000', createdAt: '2024-06-01' },
      { title: 'Advanced Guard Passing System', amount: '₩100,000', createdAt: '2024-06-05' },
    ],
  },
  {
    id: 2,
    athlete: '이영희',
    amount: '₩150,000',
    status: '완료',
    details: [
      { title: 'Wrestling for BJJ', amount: '₩150,000', createdAt: '2024-05-15' },
    ],
  },
]
