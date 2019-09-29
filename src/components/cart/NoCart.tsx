import React from 'react'
import styled from '../../styles/styled'

const NoCart: React.SFC = () => (
  <Wrapper>
    <br />
    <br />
    To select a bet, please click on any odds
  </Wrapper>
)

const Wrapper = styled('h6')`
  text-align: center;
`
export default NoCart
