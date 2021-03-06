import * as React from 'react'

import { Match } from '../../store/matches/types'
import ParticipantButton from './Participant'
import styled from '../../styles/styled'

type Props = {
  match: Match
}
const MatchItem: React.FC<Props> = ({ match }: Props) => {
  const { desc, participants } = match
  const [par1, par2] = participants
  return (
    <Wrapper className="list-group-item p-0">
      {!match.active && <Overlay />}
      <div className="d-flex align-items-center">
        <Teams className="flex-fill">
          <b>
            {participants[0].name} - {participants[1].name}
          </b>
        </Teams>
        <ParticipantButton participant={par1} match={match} />
        <ParticipantButton participant={par2} match={match} />
      </div>
      <Foot>
        <i> {desc}</i>
      </Foot>
    </Wrapper>
  )
}

const Wrapper = styled('li')`
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  border: 0;
  position: relative;
`
const Overlay = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: black;
  opacity: 0.5;
`
const Teams = styled('div')`
  padding-left: 10px;
`

const Foot = styled('div')`
  background: ${props => props.theme.colors.poi};
`

export default MatchItem
