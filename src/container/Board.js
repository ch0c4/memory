import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Modal, Progress } from 'semantic-ui-react'
import updateCard from '../core/services/card.service'
import GlobalContext from '../core/context/GlobalContext'
import { endGameDispatch, updateCardDispatch } from '../core/context/Action'

const TWO_MIN = 2 * 60
const ONE_PERCENT = 100 / TWO_MIN

const Board = () => {
  const { cards, dispatch } = useContext(GlobalContext)
  const [start, setStart] = useState(true)
  const [currentPick, setCurrentPick] = useState({})
  const [percent, setPercent] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [contentModal, setContentModal] = useState({
    header: 'Failed',
    message: 'You failed the mission',
  })

  if (start) {
    cards.sort(() => Math.random() - 0.5)
    setStart(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (percent > 100 && !isGameOver) {
        clearInterval(interval)
        setContentModal({ header: 'Failed', message: 'You failed the mission' })
        setIsGameOver(true)
        setOpenModal(true)
      }
      setPercent(percent + ONE_PERCENT)
      setSeconds(seconds + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [percent, isGameOver, seconds])

  const handlePicked = (card) => {
    const copy = { ...card }
    copy.isPicked = true

    let updatedCards = updateCard(copy, cards)
    dispatch(updateCardDispatch(updatedCards))
    if (Object.keys(currentPick).length === 0) {
      setCurrentPick(copy)
      return
    }

    if (currentPick.name === copy.name) {
      setCurrentPick({})
      return
    }
    if (currentPick.name !== copy.name) {
      setTimeout(() => {
        copy.isPicked = false
        currentPick.isPicked = false
        updatedCards = updateCard(copy, cards)
        updatedCards = updateCard(currentPick, updatedCards)
        dispatch(updateCardDispatch(updatedCards))
        setCurrentPick({})
      }, 1000)
    }
  }

  useEffect(() => {
    const cardsNotFound = cards.filter((card) => card.isPicked === false)
    if (cardsNotFound.length === 0) {
      setContentModal({
        header: 'Congrats',
        message: `You finished the game in ${seconds} seconds`,
      })
      setIsGameOver(true)
      setOpenModal(true)
    }
  }, [cards, seconds])

  const handleCloseModal = () => {
    setOpenModal(false)
    dispatch(endGameDispatch())
  }

  return (
    <>
      <Progress indicating percent={percent} size="tiny" color="red" />
      <Card.Group itemsPerRow={4}>
        {cards.map((card) => (
          <Card raised link key={card.key} onClick={() => handlePicked(card)}>
            {card.isPicked && <Card.Content textAlign="center">{card.element}</Card.Content>}
            {!card.isPicked && <Card.Content textAlign="center">{card.hidden}</Card.Content>}
          </Card>
        ))}
      </Card.Group>
      <Modal size="tiny" open={openModal} onClose={handleCloseModal}>
        <Modal.Header>{contentModal.header}</Modal.Header>
        <Modal.Content>{contentModal.message}</Modal.Content>
        <Modal.Actions>
          <Button onClick={handleCloseModal}>Close</Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default Board
