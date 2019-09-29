import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from 'emotion-theming'
import { Store } from 'redux'
import { History } from 'history'

import Routes from './routes'
import { ApplicationState } from './store'
import { main } from './styles/themes'

interface Props {
  store: Store<ApplicationState>
  history: History
}
const App: React.FC<Props> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={main}>
          <Routes />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}
export default App
