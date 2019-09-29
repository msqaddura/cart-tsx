import { Participant, Match } from '../matches/types'

export interface CartItem {
  match: Match
  anticipated: Participant
  stake?: number
}

export interface CartState {
  readonly data: CartItem[]
  readonly total: number
}

export enum CartActionTypes {
  ADD_CART_ITEM = '@@cart/ADD_CART_ITEM',
  REMOVE_CART_ITEM = '@@cart/REMOVE_CART_ITEM',
  UPDATE_CART_ITEM = '@@cart/UPDATE_CART_ITEM',
  SUBMIT_CART = '@@cart/SUBMIT_CART',
  SUBMIT_CART_SUCCESS = '@@cart/SUBMIT_CART_SUCCESS',

  FLUSH_CART = '@@cart/FLUSH_CART'
}
