import React, { useContext } from 'react'
import { Button, Container, Header } from 'semantic-ui-react'
import { startGameDispatch } from '../core/context/Action'
import GlobalContext from '../core/context/GlobalContext'
import Board from './Board'

const App = () => {
  const { start, dispatch } = useContext(GlobalContext)

  const handleStart = () => {
    dispatch(startGameDispatch())
  }

  return (
    <Container>
      {!start && (
        <>
          <br />
          <Header as="h1" textAlign="center">
            <Button onClick={handleStart}>START</Button>
          </Header>
        </>
      )}
      {start && (
        <>
          <br />
          <Board />
        </>
      )}
    </Container>
  )
}

export default App
