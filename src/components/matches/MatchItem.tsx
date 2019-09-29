import * as React from 'react'

import { Match } from '../../store/matches/types'
import ParticipantButton from './Participant'

type Props = {
  match: Match
}
const MatchItem: React.FC<Props> = ({ match }: Props) => {
  const { desc, participants } = match
  const [par1, par2] = participants
  return (
    <li className="list-group-item p-0">
      <div className="d-flex align-items-center">
        <div className="flex-fill">
          <b>
            {participants[0].name} - {participants[1].name}
          </b>
        </div>
        <ParticipantButton participant={par1} match={match} />
        <ParticipantButton participant={par2} match={match} />
      </div>
      <div>
        <i>{desc}</i>
      </div>
    </li>
  )
}

export default MatchItem
