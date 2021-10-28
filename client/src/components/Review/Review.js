import { FaStar } from 'react-icons/fa'
import styled from 'styled-components/macro'

function Review({ id, onAddRating, ratings }) {
  let currentRating
  currentRating = ratings.find(item => item.id === id).rating

  function handleStarClick(event, value) {
    event.stopPropagation()

    onAddRating(value, id)
  }

  const stars = Array(5).fill(0)

  return (
    <Stars>
      {stars.map((_, index) => {
        return (
          <FaStar
            aria-label="star"
            key={index}
            onClick={event => handleStarClick(event, index + 1)}
            color={currentRating > index ? '#ffcc33' : '#a9a9a9'}
          />
        )
      })}
    </Stars>
  )
}

const Stars = styled.div`
  display: flex;
  flex-direction: row;
`

export default Review
