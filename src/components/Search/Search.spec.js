import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Search from './Search'

describe('Search', () => {
  const mockOnSearchInput = jest.fn()

  it('renders a form with an input element and a button element', () => {
    render(<Search />)

    const inputEl = screen.getByLabelText('Search bar')
    expect(inputEl).toBeInTheDocument()

    const button = screen.getByRole('button', { name: 'search' })
    expect(button).toBeInTheDocument()
  })

  it('calls a function when the user types something in the search field and the input value changes', () => {
    render(<Search onSearchInput={mockOnSearchInput} />)

    const inputEl = screen.getByLabelText('Search bar')
    userEvent.type(inputEl, 'a')
    expect(mockOnSearchInput).toHaveBeenCalled()
  })
})
