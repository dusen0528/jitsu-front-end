export interface PayoutRequest {
  id: number
  athlete: string
  amount: string
  status: '대기' | '완료'
}

export const demoPayouts: PayoutRequest[] = [
  { id: 1, athlete: '김철수', amount: '₩300,000', status: '대기' },
  { id: 2, athlete: '이영희', amount: '₩150,000', status: '완료' },
]
