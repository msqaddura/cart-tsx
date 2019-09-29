import { action } from 'typesafe-actions'
import { MatchesActionTypes, Match } from './types'

export const fetchRequest = () => action(MatchesActionTypes.FETCH_REQUEST)

export const fetchSuccess = (data: Match[]) => action(MatchesActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(MatchesActionTypes.FETCH_ERROR, message)
