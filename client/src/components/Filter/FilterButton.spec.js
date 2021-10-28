import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FilterButton from './FilterButton'

describe('FilterButton', () => {
  const mockShowFilter = jest.fn()

  it('renders a button', () => {
    render(<FilterButton />)

    const button = screen.getByLabelText('show filters')
    expect(button).toBeInTheDocument()
  })

  it('calls a function when button is clicked', () => {
    render(<FilterButton showFilter={mockShowFilter} />)

    const button = screen.getByLabelText('show filters')
    userEvent.click(button)
    expect(mockShowFilter).toHaveBeenCalled()
  })
})
