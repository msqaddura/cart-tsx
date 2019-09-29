import { SPORT, Match } from './types'

export const MATCHES: Match[] = [
  {
    sport: SPORT.BASKETBALL,
    desc: '1:0 45"',
    active: true,
    id: 1,
    participants: [{ name: 'Estonia', betValue: 1 }, { name: 'Lithania', betValue: 2 }]
  },
  {
    sport: SPORT.BASKETBALL,
    desc: '1:0 Match Over',
    active: false,
    id: 2,
    participants: [{ name: 'Latvia', betValue: 1 }, { name: 'Bellarus', betValue: 2 }]
  },
  {
    sport: SPORT.FOOTBALL,
    desc: '(1:0) 51"',
    active: true,
    id: 3,
    participants: [{ name: 'Brazil', betValue: 0.5 }, { name: 'Germany', betValue: 2 }]
  },
  {
    sport: SPORT.FOOTBALL,
    desc: '(0:0) 4"',
    active: true,
    id: 4,
    participants: [{ name: 'Spain', betValue: 1 }, { name: 'Chile', betValue: 5 }]
  },
  {
    sport: SPORT.TENNIS,
    desc: '1:1 (6:7, 6:1, 2:0) 0:0',
    active: true,
    id: 5,
    participants: [{ name: 'Michel A.', betValue: 1.2 }, { name: 'Donatello', betValue: 6 }]
  },
  {
    sport: SPORT.TENNIS,
    desc: '1:1 (5:7, 6:2, 0:0) 0:0',
    active: true,
    id: 6,
    participants: [{ name: 'Leonardo', betValue: 1 }, { name: 'Ralph', betValue: 3.1 }]
  },
  {
    sport: SPORT.OTHER_SPORTS,
    desc: 'Match Not Started',
    active: false,
    id: 4,
    participants: [{ name: 'India', betValue: 1 }, { name: 'Australia', betValue: 1 }]
  }
]
