import { getByRole, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import AddItemButton from './AddItemButton'
import { MemoryRouter as Router } from 'react-router-dom'

describe('AddItemButton', () => {
  it('renders a button with a link', () => {
    render(
      <Router>
        <AddItemButton />
      </Router>
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    const link = screen.getByText('Add Item')
    expect(link).toBeInTheDocument()
  })
})
