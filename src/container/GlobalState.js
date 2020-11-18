import React, { useReducer } from 'react'
import { PropTypes } from 'prop-types'
import AppReducer from '../core/context/AppReducer'
import GlobalContext from '../core/context/GlobalContext'
import initialState from '../core/context/initialState'

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <GlobalContext.Provider value={{ start: state.start, cards: state.cards, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

GlobalProvider.propTypes = {
  children: PropTypes.element,
}

GlobalProvider.defaultProps = {
  children: <h1>Default</h1>,
}

export default GlobalProvider
