import * as React from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from '../../store'
import { fetchRequest } from '../../store/matches/actions'
import { Match } from '../../store/matches/types'
import MatchesContainer from '../../containers/MatchesContainer'
import CartContainer from '../../containers/CartContainer'

interface PropsFromState {
  loading: boolean
  data: Match[]
  errors?: string
}

interface PropsFromDispatch {
  fetchMatches: typeof fetchRequest
}
type AllProps = PropsFromState & PropsFromDispatch

class MatchesIndexPage extends React.Component<AllProps> {
  public componentDidMount() {
    const { data, fetchMatches } = this.props

    if (data.length === 0) {
      fetchMatches()
    }
  }

  public render() {
    return (
      <div className="row">
        <div className="col-8">
          <MatchesContainer />
        </div>
        <div className="col-4">
          <CartContainer />
        </div>
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
)(MatchesIndexPage)
