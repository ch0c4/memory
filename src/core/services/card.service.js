const updateCard = (updatedCard, cards) => {
  const index = cards.findIndex((card) => card.key === updatedCard.key)
  const filteredCards = cards.filter((card) => card.key !== updatedCard.key)
  filteredCards.splice(index, 0, updatedCard)
  return filteredCards
}

export default updateCard
