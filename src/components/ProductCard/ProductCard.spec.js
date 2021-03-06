import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'
import { MemoryRouter as Router } from 'react-router-dom'

const exampleRatings = [
  {
    id: '1',
    rating: 4,
  },
]

describe('ProductCard', () => {
  it('renders product card elements', () => {
    render(
      <Router>
        <ProductCard
          name="Oatly Haferdrink Barista Edition"
          description="Haferdrink Barista-Edition, 100% pflanzlich, perfekt zum Aufschäumen, ideal für Kaffee und Tee. Kein GMO."
          id="1"
          ratings={exampleRatings}
        />
      </Router>
    )

    const image = screen.getByAltText('')
    expect(image).toBeInTheDocument()

    const header = screen.getByRole('heading')
    expect(header).toBeInTheDocument()

    const description = screen.getByText(
      'Haferdrink Barista-Edition, 100% pflanzlich, perfekt zum Aufschäumen, ideal für Kaffee und Tee. Kein GMO.'
    )
    expect(description).toBeInTheDocument()
  })
})
