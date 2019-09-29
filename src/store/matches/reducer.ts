import { Reducer } from 'redux'
import { MatchesState, MatchesActionTypes } from './types'

export const initialState: MatchesState = {
  data: [],
  errors: undefined,
  loading: false
}

const reducer: Reducer<MatchesState> = (state = initialState, action) => {
  switch (action.type) {
    case MatchesActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case MatchesActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case MatchesActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as matchesReducer }
