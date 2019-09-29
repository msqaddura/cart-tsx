import React from 'react'

import renderer, { ReactTestRenderer } from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { Store, AnyAction } from 'redux'
import { ThemeProvider } from 'emotion-theming'
import CartContainer from '../containers/CartContainer'

import { MATCHES } from '../store/matches/mock'
import { addItemToCart } from '../store/cart/actions'
import { ApplicationState } from '../store'
import { main } from '../styles/themes'

const mockStore = configureStore([])
describe('CartContainer Connected to Redux', () => {
  let store: Store<ApplicationState, AnyAction>
  let component: ReactTestRenderer

  beforeEach(() => {
    store = mockStore({
      cart: { data: [], total: 0 }
      // cart: { data: [{ stake: 0, match: MATCHES[0], anticipated: MATCHES[0].participants[0].name }], total: 0 }
    })
    // yes we do need to pass theme provider along with store
    component = renderer.create(
      <Provider store={store}>
        <ThemeProvider theme={main}>
          <CartContainer />
        </ThemeProvider>
      </Provider>
    )
  })

  it('should not render no-cart', () => {
    // to avoid deep diving, we need something like enzyme to test without shallow access
    expect(component.root.findByType(CartContainer.WrappedComponent).findAllByProps({ className: 'empty' })).toHaveLength(1)
  })
  it('should render no-cart', () => {
    store.dispatch(addItemToCart({ match: MATCHES[1], anticipated: MATCHES[1].participants[1] }))
    // https://github.com/dmitry-zaets/redux-mock-store/issues/71
    // a s you can see, the store did not get changed, bcz redux-mock-store doesnt work on reducer level
    expect(component.root.findByType(CartContainer.WrappedComponent).findAllByProps({ className: 'filled' })).toHaveLength(0)
  })
})
