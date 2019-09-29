import { all, fork, put, takeEvery } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { CartActionTypes } from './types'
import { submitCartSuccess } from './actions'

function* handleSubmit() {
  yield put(submitCartSuccess())
  yield put(push('/checkout'))
}

function* watch() {
  yield takeEvery(CartActionTypes.SUBMIT_CART, handleSubmit)
}

function* cartSaga() {
  yield all([fork(watch)])
}

export default cartSaga
