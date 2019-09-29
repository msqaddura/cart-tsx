import * as React from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from '../store'
import { fetchRequest } from '../store/matches/actions'
import { SPORT, Match } from '../store/matches/types'
import MatchGroup from '../components/matches/MatchGroup'

interface PropsFromState {
  loading: boolean
  data: Match[]
  errors?: string
}
interface PropsFromDispatch {
  fetchMatches: typeof fetchRequest
}
type AllProps = PropsFromState & PropsFromDispatch

class MatchesContainer extends React.Component<AllProps> {
  public componentDidMount() {
    // fetchMatches()
  }

  public render() {
    const { data } = this.props

    return (
      <div className="">
        <MatchGroup sport={SPORT.BASKETBALL} matches={data} />
        <MatchGroup sport={SPORT.FOOTBALL} matches={data} />
        <MatchGroup sport={SPORT.TENNIS} matches={data} />
        <MatchGroup sport={SPORT.OTHER_SPORTS} matches={data} />
      </div>
    )
  }
}
const mapStateToProps = ({ matches }: ApplicationState) => ({
  loading: matches.loading,
  errors: matches.errors,
  data: matches.data
})
const mapDispatchToProps = {
  fetchMatches: fetchRequest
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchesContainer)
