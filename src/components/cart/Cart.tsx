/* eslint-disable react/no-array-index-key */
import React from 'react'
import { CartItem } from '../../store/cart/types'
import CartItemBox from './CartItem'
import styled from '../../styles/styled'
import { submitCart, flushCart } from '../../store/cart/actions'

interface Props {
  data: CartItem[]
  total: number
  submit: typeof submitCart
  flush: typeof flushCart
}
const Cart: React.FC<Props> = ({ data, total, submit, flush }: Props) => (
  <>
    {data.map((cartItem, index) => (
      <CartItemBox cartItem={cartItem} key={`cartitem_${index}`} />
    ))}
    <div>
      Total Stake <Stake>€ {total}</Stake>
    </div>
    <div className="btn-group btn-group-sm w-100" role="group">
      <button onClick={() => flush()} type="button" className="btn btn-warning">
        Clear
      </button>
      <button onClick={() => submit()} type="button" className="btn btn-primary" disabled={total === 0}>
        Submit
      </button>
    </div>
  </>
)

const Stake = styled('span')`
  float: right;
`

export default Cart
