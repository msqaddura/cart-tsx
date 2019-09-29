export interface Participant {
  name: string
  betValue: number
}

export enum SPORT {
  FOOTBALL = 'FOOTBALL',
  TENNIS = 'TENNIS',
  OTHER_SPORTS = 'OTHER SPORTS',
  BASKETBALL = 'BASKETBALL'
}
export interface Match {
  id: number
  desc: string
  sport: SPORT

  participants: Participant[]

  active: boolean
}
export interface MatchesState {
  readonly loading: boolean
  readonly data: Match[]
  readonly errors?: string
}

export enum MatchesActionTypes {
  FETCH_REQUEST = '@@matches/FETCH_REQUEST',
  FETCH_SUCCESS = '@@matches/FETCH_SUCCESS',
  FETCH_ERROR = '@@matches/FETCH_ERROR',
  ADD_MATCH_TO_CART = '@@matches/ADD_MATCH_TO_CART',
  REMOVE_MATCH_FROM_CART = '@@matches/REMOVE_MATCH_FROM_CART'
}
