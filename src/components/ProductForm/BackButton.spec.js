import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import BackButton from './BackButton'

describe('AddItemButton', () => {
  it('renders a button with a link', () => {
    render(
      <Router>
        <BackButton />
      </Router>
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    const link = screen.getByText('Back to Products')
    expect(link).toBeInTheDocument()
  })
})
