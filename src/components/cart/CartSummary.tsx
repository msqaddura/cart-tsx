import React from 'react'
import { connect } from 'react-redux'
import styled from '../../styles/styled'
import { ApplicationState } from '../../store'
import { CartState } from '../../store/cart/types'

const CartSummary: React.SFC<CartState> = ({ data, total }) => (
  <Wrapper>
    <p>{JSON.stringify(data)}</p>
    <p>{total}</p>
  </Wrapper>
)

const Wrapper = styled('h6')`
  text-align: center;
`

const mapStateToProps = ({ cart }: ApplicationState) => ({
  ...cart
})

export default connect(mapStateToProps)(CartSummary)
