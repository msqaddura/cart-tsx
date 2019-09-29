import React from 'react'
import { connect } from 'react-redux'
import styled from '../../styles/styled'
import { ApplicationState } from '../../store'
import { CartState } from '../../store/cart/types'

const CartSummary: React.SFC<CartState> = ({ data, total }) => (
  <Wrapper>
    <p>This is a plan routed page where you can check your cart in JSON format</p>
    <hr />
    <h1>Data</h1>
    <p>{JSON.stringify(data)}</p>
    <hr />
    <h1>Total</h1>
    <p>{total}</p>
  </Wrapper>
)

const Wrapper = styled('h6')`
  text-align: center;
  margin-top: 20px;
`

const mapStateToProps = ({ cart }: ApplicationState) => ({
  ...cart
})

export default connect(mapStateToProps)(CartSummary)
