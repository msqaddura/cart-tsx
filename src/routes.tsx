import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Global } from '@emotion/core'

import Root from './components/layout/Root'

import MatchesPage from './pages/matches'
import globals from './styles/globals'
import SummaryPage from './pages/cart/Summary'

const Routes: React.FC = () => (
  <Root>
    <Global styles={globals} />
    <Switch>
      <Route exact path="/" component={MatchesPage} />
      <Route exact path="/checkout" component={SummaryPage} />
      <Route component={() => <div>Four Oh Four, no links in this project</div>} />
    </Switch>
  </Root>
)

export default Routes
