import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Global } from '@emotion/core'

import Root from './components/layout/Root'
import IndexPage from './pages/index'

import MatchesPage from './pages/matches'

const Routes: React.FC = () => (
  <Root>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/matches" component={MatchesPage} />
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  </Root>
)

export default Routes
