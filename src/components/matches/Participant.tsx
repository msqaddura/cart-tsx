/* eslint-disable no-nested-ternary */
import * as React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { Match, Participant } from '../../store/matches/types'
import { findMatchInCart } from '../../store/cart/selectors'
import { ApplicationState } from '../../store'
import { addItemToCart, removeItemFromCart } from '../../store/cart/actions'

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
      className={`btn btn-outline-${inCart ? 'warning' : match.active ? 'primary' : 'dark'}`}
      disabled={!match.active}
    >
      {1 + match.participants.findIndex(par => par.name === participant.name)}:{<BetValue>{participant.betValue}</BetValue>}
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

const BetValue = styled('span')`
  padding-left: 10px;
`

const Button = styled('button')`
  &.is-in {
    background: red;
  }
`

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticipantButton)
