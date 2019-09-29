import { all, fork, put, takeEvery } from 'redux-saga/effects'
import { MatchesActionTypes } from './types'
import { fetchSuccess } from './actions'
import { MATCHES } from './mock'

function* handleFetch() {
  yield put(fetchSuccess(MATCHES))
}

function* watchFetchRequest() {
  yield takeEvery(MatchesActionTypes.FETCH_REQUEST, handleFetch)
}

function* matchesSaga() {
  yield all([fork(watchFetchRequest)])
}

export default matchesSaga
