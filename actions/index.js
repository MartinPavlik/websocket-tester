import {connect, send} from '../api/ws'

export const CONNECTION_REQUEST = 'CONNECTION_REQUEST'
export const CONNECTION_READY = 'CONNECTION_READY'
export const CONNECTION_CLOSED = 'CONNECTION_CLOSED'
export const URL_CHANGE = 'URL_CHANGE'
export const NEW_MESSAGE = 'NEW_MESSAGE'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const MESSAGE_TEXT_CHANGE = 'MESSAGE_TEXT_CHANGE'

let nextId = 0

export function onOpen(e) {
  return {
    type: CONNECTION_READY
  }
}

export function onMessage(e) {
  console.info('new message: ', e.data)
  return {
    type: NEW_MESSAGE,
    message: {
      data: e.data,
      id: nextId++
    }
  }
}

export function sendMessage(message) {
  send(message);
  return {
    type: SEND_MESSAGE
  }
}

export function onClose(e) {
  return {
    type: CONNECTION_CLOSED
  }
}

export function requestConnection(url) {
  return (dispatch, getState) => {
    dispatch({
      type: CONNECTION_REQUEST
    })
    connect({
      url: getState().app.url,
      onOpen: (e => dispatch(onOpen(e))),
      onMessage: (e => dispatch(onMessage(e))),
      onClose: (e => dispatch(onClose(e))),
    })
  }
}

export function changeUrl(url) {
  return {
    type: URL_CHANGE,
    url
  }
}

export function changeMessageText(message) {
  return {
    type: MESSAGE_TEXT_CHANGE,
    message
  }
}