import { action } from 'typesafe-actions'
import { CartActionTypes, CartItem } from './types'

export const addItemToCart = (item: CartItem) => action(CartActionTypes.ADD_CART_ITEM, item)

export const removeItemFromCart = (item: CartItem) => action(CartActionTypes.REMOVE_CART_ITEM, item)

export const updateCartItem = (item: CartItem) => action(CartActionTypes.UPDATE_CART_ITEM, item)

export const flushCart = () => action(CartActionTypes.FLUSH_CART)

export const submitCart = () => action(CartActionTypes.SUBMIT_CART)
