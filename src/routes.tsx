import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Global } from '@emotion/core'

import Root from './components/layout/Root'

import MatchesPage from './pages/matches'
import globals from './styles/globals'
import CheckoutPage from './pages/cart/Checkout'

const Routes: React.FC = () => (
  <Root>
    <Global styles={globals} />
    <Switch>
      <Route exact path="/" component={MatchesPage} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route component={MatchesPage} />
      {/* Only for Github Pages we gonna fall back to Index instead of 404 Not Found
      <Route component={() => <div>Four Oh Four, no links in this project</div>} /> */}
    </Switch>
  </Root>
)

export default Routes
