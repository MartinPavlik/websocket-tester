import {
  CONNECTION_REQUEST,
  CONNECTION_READY,
  CONNECTION_CLOSED,
  URL_CHANGE,
  NEW_MESSAGE,
  SEND_MESSAGE,
  MESSAGE_TEXT_CHANGE
} from '../actions'

const defaultState = {
  connected: false,
  connecting: false,
  url: 'ws://localhost:3000',
  message: '',
  messages: [],
  newMessageText: ''
}

export default function (state = defaultState, action) {
  console.info("app reducer: ", action, state)
  switch(action.type) {
    case CONNECTION_REQUEST:
      return Object.assign({}, state, {connecting: true, connected: false})
    case CONNECTION_READY:
      return Object.assign({}, state, {connecting: false, connected: true})
    case CONNECTION_CLOSED:
      return Object.assign({}, state, {connecting: false, connected: false})
    case URL_CHANGE:
      return Object.assign({}, state, {url: action.url})
    case NEW_MESSAGE:
      return Object.assign({}, state, {
        messages: [].concat(state.messages.concat(action.message))
      })
    case SEND_MESSAGE:
      return Object.assign({}, state, {
        newMessageText: ''
      })
    case MESSAGE_TEXT_CHANGE:
      return Object.assign({}, state, {
        newMessageText: action.message
      })
    default:
      return state
  }
}