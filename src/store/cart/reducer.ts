import { Reducer } from 'redux'
import { CartActionTypes, CartState, CartItem } from './types'

// const calc = (items: CartItem[]) => items.reduce((acc: number, curr: CartItem) => acc + (curr.stake || 0), 0)
const postReduce = (state: CartState) => ({
  ...state,
  total: state.data.reduce((acc: number, curr: CartItem) => acc + (curr.stake || 0), 0)
})

export const initialState: CartState = {
  data: [],
  total: 0
}

const reducer: Reducer<CartState> = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_CART_ITEM: {
      return postReduce({ ...state, data: [...state.data, { ...action.payload, stake: 0 }] })
    }
    case CartActionTypes.REMOVE_CART_ITEM: {
      return postReduce({
        ...state,
        data: state.data.filter(
          item => !(action.payload.match.id === item.match.id && action.payload.anticipated.name === item.anticipated.name)
        )
      })
    }
    case CartActionTypes.UPDATE_CART_ITEM: {
      return postReduce({
        ...state,
        data: state.data.map(item =>
          action.payload.match.id === item.match.id && action.payload.anticipated.name === item.anticipated.name
            ? { ...item, stake: action.payload.stake }
            : item
        )
      })
    }
    case CartActionTypes.FLUSH_CART: {
      return initialState
    }
    case CartActionTypes.SUBMIT_CART_SUCCESS: {
      console.log(state.data, state.total)
      return state
    }
    default: {
      return state
    }
  }
}

export { reducer as cartReducer }
