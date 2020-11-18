import { END_GAME, START_GAME, UPDATE_CARD } from './Action'
import initialState from './initialState'

export default (state, action) => {
  switch (action.type) {
    case START_GAME:
      return { ...state, start: true }
    case END_GAME:
      return initialState
    case UPDATE_CARD:
      return { ...state, cards: action.payload }
    default:
      return state
  }
}
