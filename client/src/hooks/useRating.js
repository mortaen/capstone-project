import { useState } from 'react'
import { initialRatings } from '../components/Review/initialRatings'

export default function useRating() {
  const [ratings, setRatings] = useState(() => {
    if (localStorage.getItem('ratingsLocalStorage')) {
      return JSON.parse(localStorage.getItem('ratingsLocalStorage'))
    } else {
      return initialRatings
    }
  })

  function handleAddRating(value, id) {
    const otherRatings = ratings.filter(item => item.id !== id)
    const newRatings = [
      ...otherRatings,
      {
        id: id,
        rating: value,
      },
    ]

    setRatings(newRatings)
    const stringifiedValue = JSON.stringify(newRatings)
    localStorage.setItem('ratingsLocalStorage', stringifiedValue)
  }

  return { ratings, handleAddRating }
}
