export interface AthleteCard {
  id: number
  name: string
  discipline: string
  image: string
}

export const demoAthletes: AthleteCard[] = [
  {
    id: 1,
    name: '이호성',
    discipline: 'MMA',
    image: '/placeholder-user.jpg',
  },
  {
    id: 2,
    name: '김준수',
    discipline: '주짓수',
    image: '/placeholder-user.jpg',
  },
]
