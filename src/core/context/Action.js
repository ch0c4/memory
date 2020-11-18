export const UPDATE_CARD = 'UPDATE_CARD'
export const START_GAME = 'START_GAME'
export const END_GAME = 'END_GAME'

export const startGameDispatch = () => ({
  type: START_GAME,
})

export const endGameDispatch = () => ({
  type: END_GAME,
})

export const updateCardDispatch = (cards) => ({
  type: UPDATE_CARD,
  payload: cards,
})
