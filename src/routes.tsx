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
      {
        <Route
          component={MatchesPage}
          // https://github.com/rafrex/spa-github-pages,
          // should be 404 but for github pages we wil get this one for now as per
          // component={() => <div>Four Oh Four, no links in this project</div>}
        />
      }
    </Switch>
  </Root>
)

export default Routes
