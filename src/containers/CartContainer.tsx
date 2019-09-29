/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from '../store'
import { fetchRequest } from '../store/matches/actions'
import { CartItem } from '../store/cart/types'
import NoCart from '../components/cart/NoCart'
import Cart from '../components/cart/Cart'
import styled from '../styles/styled'
import { flushCart, submitCart } from '../store/cart/actions'

interface PropsFromState {
  data: CartItem[]
  total: number
}

interface PropsFromDispatch {
  fetchMatches: typeof fetchRequest
  flush: typeof flushCart
  submit: typeof submitCart
}
type AllProps = PropsFromState & PropsFromDispatch

export class CartContainer extends React.Component<AllProps> {
  // eslint-disable-next-line react/static-property-placement
  public static defaultProps: PropsFromState = {
    data: [],
    total: 0
  }

  public componentDidMount() {
    const { fetchMatches } = this.props
    // fetchMatches()
  }

  public render() {
    const { data, total, flush, submit } = this.props

    return (
      <Wrapper className={data.length ? 'filled' : 'empty'}>
        <h4>Bet Slip</h4>
        <hr />
        {data.length ? <Cart flush={flush} submit={submit} data={data} total={total} /> : <NoCart />}
      </Wrapper>
    )
  }
}

const Wrapper = styled('div')`
  margin-top: 5px;
  background: ${props => props.theme.colors.head};
  box-shadow: 0 0 2px black;
  color: white;
  padding: 10px;
`

const mapStateToProps = ({ cart }: ApplicationState) => ({
  data: cart.data,
  total: cart.total
})

const mapDispatchToProps = {
  fetchMatches: fetchRequest,
  flush: flushCart,
  submit: submitCart
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)
