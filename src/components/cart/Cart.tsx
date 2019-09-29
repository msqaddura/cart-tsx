/* eslint-disable react/no-array-index-key */
import React from 'react'
import { CartItem } from '../../store/cart/types'
import CartItemBox from './CartItem'

interface Props {
  data: CartItem[]
  total: number
}
const Cart: React.FC<Props> = ({ data, total }: Props) => (
  <>
    {data.map((cartItem, index) => (
      <CartItemBox cartItem={cartItem} key={`cartitem_${index}`} />
    ))}
    <div>
      Total<span>{total}</span>
    </div>
  </>
)

export default Cart
