import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

(function() {
  const _store = configureStore()
  render(
    <Provider store={_store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})()
