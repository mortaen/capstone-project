import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import Navigation from './Navigation'

describe('NavButton', () => {
  it('renders a button and navigation elements', () => {
    render(
      <Router>
        <Navigation />
      </Router>
    )

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)

    const ListItem = screen.getByText('Add Product')
    expect(ListItem).toBeInTheDocument()

    const ListItem2 = screen.getByText('Products')
    expect(ListItem2).toBeInTheDocument()
  })
})
