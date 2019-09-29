import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import { MatchesState } from './matches/types'
import { matchesReducer } from './matches/reducer'
import matchesSaga from './matches/sagas'
import { CartState } from './cart/types'
import { cartReducer } from './cart/reducer'

export interface ApplicationState {
  router: RouterState

  matches: MatchesState

  cart: CartState
}

export const createRootReducer = (history: History) =>
  combineReducers({
    matches: matchesReducer,
    cart: cartReducer,
    router: connectRouter(history)
  })

export function* rootSaga() {
  yield all([fork(matchesSaga)])
}
