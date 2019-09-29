import { Participant, Match } from '../matches/types'
import { CartState } from './types'

export function findMatchInCart({ data }: CartState, match: Match, participant: Participant) {
  return data.findIndex(cartItem => cartItem.match.id === match.id && cartItem.anticipated.name === participant.name) !== -1
}
