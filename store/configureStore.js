import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const store = createStore(reducer, applyMiddleware(thunk), initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}