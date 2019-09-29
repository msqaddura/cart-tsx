import * as React from 'react'
import { SPORT, Match } from '../../store/matches/types'
import MatchItem from './MatchItem'
import styled from '../../styles/styled'

type Props = {
  sport: SPORT
  matches: Match[]
}
const MatchGroup: React.FC<Props> = ({ sport, matches }: Props) => {
  const sportSafe = sport.replace(' ', '')
  return (
    <Accordion className="accordion" id={`accordion_${sportSafe}`}>
      <Card className="card">
        <Header className="card-header" id={`heading_${sportSafe}`}>
          <h2 className="mb-0" style={{ position: 'relative' }}>
            <HeaderButton
              className="btn btn-link stretched-link"
              type="button"
              data-toggle="collapse"
              data-target={`#collapse_${sportSafe}`}
              aria-expanded="true"
              aria-controls={`collapse_${sportSafe}`}
            >
              {sport}
            </HeaderButton>
          </h2>
        </Header>

        <div
          id={`collapse_${sportSafe}`}
          className="collapse show"
          aria-labelledby={`heading_${sportSafe}`}
          data-parent={`#accordion_${sportSafe}`}
        >
          <div className="card-body p-0">
            <ul className="list-group">
              {matches
                .filter(match => match.sport === sport)
                .map(match => (
                  <MatchItem match={match} key={match.id} />
                ))}
            </ul>
          </div>
        </div>
      </Card>
    </Accordion>
  )
}

const Card = styled('div')`
  border: 0;
`

const Accordion = styled('div')`
  box-shadow: 0 0 2px black;
  margin: 5px;
`
const Header = styled('div')`
  background: ${props => props.theme.colors.head};
  color: white !important;
`

const HeaderButton = styled('button')`
  color: white;
  &:hover {
    text-decoration: none;
    color: dodgerblue;
  }
  &:focus {
    text-decoration: none;
    color: white;
  }
`
export default MatchGroup
