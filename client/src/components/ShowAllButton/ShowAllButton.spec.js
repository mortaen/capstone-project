import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ShowAllButton from './ShowAllButton'

describe('ShowAllButton', () => {
  const mockOnShowAllProducts = jest.fn()

  it('renders a button', () => {
    render(<ShowAllButton />)

    const button = screen.getByRole('button', { name: 'show all' })
    expect(button).toBeInTheDocument()
  })

  it('calls a function when the button is clicked', () => {
    render(<ShowAllButton onShowAllProducts={mockOnShowAllProducts} />)

    const button = screen.getByRole('button', { name: 'show all' })
    userEvent.click(button)
    expect(mockOnShowAllProducts).toHaveBeenCalled()
  })
})
