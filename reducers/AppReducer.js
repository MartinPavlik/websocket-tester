import {
} from '../actions'

const defaultState = {
}

export default function (state = defaultState, action) {
  console.info("app reducer: ", action, state)
  switch(action.type) {
    default:
      return state
  }
}