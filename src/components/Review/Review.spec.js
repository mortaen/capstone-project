import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Review from './Review'

const mockOnAddRating = jest.fn()

const exampleRatings = [
  {
    id: '1',
    rating: 4,
  },
]

describe('Review', () => {
  it('renders 5 stars', () => {
    render(<Review id={'1'} ratings={exampleRatings} />)

    const ratingStars = screen.getAllByLabelText('star')
    expect(ratingStars).toHaveLength(5)
  })

  it('calls a function when one of the stars is clicked', () => {
    render(
      <Review id={'1'} ratings={exampleRatings} onAddRating={mockOnAddRating} />
    )

    const ratingStars = screen.getAllByLabelText('star')
    expect(ratingStars).toHaveLength(5)

    userEvent.click(ratingStars[2])
    expect(mockOnAddRating).toHaveBeenCalled()
  })
})
