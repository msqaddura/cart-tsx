/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from '../store'
import { fetchRequest } from '../store/matches/actions'
import { CartItem } from '../store/cart/types'
import NoCart from '../components/cart/NoCart'
import Cart from '../components/cart/Cart'

interface PropsFromState {
  data: CartItem[]
  total: number
}

interface PropsFromDispatch {
  fetchMatches: typeof fetchRequest
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

    fetchMatches()
  }

  public render() {
    const { data, total } = this.props

    return (
      <div className={data.length ? 'filled' : 'empty'}>
        <h1>Bet Slip</h1>
        {data.length ? <Cart data={data} total={total} /> : <NoCart />}
      </div>
    )
  }
}

const mapStateToProps = ({ cart }: ApplicationState) => ({
  data: cart.data,
  total: cart.total
})

const mapDispatchToProps = {
  fetchMatches: fetchRequest
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)
