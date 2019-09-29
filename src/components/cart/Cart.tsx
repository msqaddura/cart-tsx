/* eslint-disable react/no-array-index-key */
import React from 'react'
import { CartItem } from '../../store/cart/types'
import CartItemBox from './CartItem'
import styled from '../../styles/styled'

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
      Total Stake <Stake>€ {total}</Stake>
    </div>
  </>
)

const Stake = styled('span')`
  float: right;
`

export default Cart
