import * as React from 'react'
import { connect } from 'react-redux'
import { CartItem } from '../../store/cart/types'
import { updateCartItem, removeItemFromCart } from '../../store/cart/actions'

type Props = {
  cartItem: CartItem
  update?: any
  remove?: any
}
const CartItemBox: React.FC<Props> = ({ cartItem, update, remove }) => {
  const { anticipated, stake } = cartItem
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    update({ ...cartItem, stake: +event.target.value })
  }

  const handleClick = () => {
    remove(cartItem)
  }

  return (
    <div className="d-flex">
      <div className="w-5">
        <button onClick={handleClick} type="button" className="btn btn-outline">
          <i className="fa fa-undo" />
        </button>
      </div>
      <div>
        <p>{anticipated.name} to win</p>
        <input type="number" style={{ maxWidth: '140px' }} value={stake} onChange={handleChange} min={0} />
        <p>To Return: $ {stake || 0 * anticipated.betValue}</p>
      </div>
    </div>
  )
}
const mapDispatchToProps = {
  update: updateCartItem,
  remove: removeItemFromCart
}
export default connect(
  null,
  mapDispatchToProps
)(CartItemBox)
