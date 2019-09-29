import * as React from 'react'
import { connect } from 'react-redux'
import { CartItem } from '../../store/cart/types'
import { updateCartItem, removeItemFromCart } from '../../store/cart/actions'
import styled from '../../styles/styled'
import { fixedFormat } from '../../utils'

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
    <Wrapper className="d-flex">
      <div className="">
        <button onClick={handleClick} type="button" className="btn btn-outline">
          <i className="fa fa-undo" />
        </button>
      </div>
      <div className="flex-fill">
        <p>
          <b>{anticipated.name}</b> wins
          <Stake>{anticipated.betValue}</Stake>
        </p>
        <input type="number" style={{ maxWidth: '140px' }} value={stake} onChange={handleChange} min={0} />
        <p>To Return: € {fixedFormat(stake ? stake * anticipated.betValue : 0)}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  background-color: ${props => props.theme.colors.cancel};
  margin: 2px;
`

const Stake = styled('span')`
  float: right;
  margin-right: 5px;
`

const mapDispatchToProps = {
  update: updateCartItem,
  remove: removeItemFromCart
}

export default connect(
  null,
  mapDispatchToProps
)(CartItemBox)
