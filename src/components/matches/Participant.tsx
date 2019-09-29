/* eslint-disable no-nested-ternary */
import * as React from 'react'
import { connect } from 'react-redux'

import { Match, Participant } from '../../store/matches/types'
import { findMatchInCart } from '../../store/cart/selectors'
import { ApplicationState } from '../../store'
import { addItemToCart, removeItemFromCart } from '../../store/cart/actions'
import styled from '../../styles/styled'

type Props = {
  match: Match
  participant: Participant
  inCart?: boolean
  add?: any
  remove?: any
}

const ParticipantButton: React.FC<Props> = ({ match, inCart, participant, add, remove }) => {
  const handleClick = () => (inCart ? remove({ match, anticipated: participant }) : add({ match, anticipated: participant }))

  return (
    <Button
      onClick={handleClick}
      type="button"
      className={`btn btn-${inCart ? 'success' : match.active ? 'primary' : 'dark'}`}
      disabled={!match.active}
    >
      <Index>{1 + match.participants.findIndex(par => par.name === participant.name)}:</Index>
      {<BetValue>{match.active ? participant.betValue : ''}</BetValue>}
    </Button>
  )
}

const mapStateToProps = ({ cart }: ApplicationState, { match, participant }: Props) => ({
  inCart: findMatchInCart(cart, match, participant)
})

const mapDispatchToProps = {
  add: addItemToCart,
  remove: removeItemFromCart
}

const Index = styled('span')`
  float: left;
`

const BetValue = styled('span')`
  padding-left: 10px;
  float: right;
`

const Button = styled('button')`
  width: 100px;
  border-radius: 0;
  margin: 0 1px;
  &:focus {
    box-shadow: none !important;
  }
`

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticipantButton)
