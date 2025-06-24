export interface MemberData {
  id: number
  name: string
  email: string
  role: string
  /** 선수 개별 정산 수수료 비율(%) */
  commissionRate?: number
}

export const demoMembers: MemberData[] = [
  { id: 1, name: '김철수', email: 'chulsoo@example.com', role: '관리자' },
  { id: 2, name: '이영희', email: 'younghee@example.com', role: '수련생' },
  { id: 3, name: '박민수', email: 'minsoo@example.com', role: '수련생' },
  {
    id: 4,
    name: '정무도',
    email: 'athlete@example.com',
    role: '선수',
    commissionRate: 30,
  },
]
