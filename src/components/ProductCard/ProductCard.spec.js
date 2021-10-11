import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'

describe('ProductCard', () => {
  it('renders product card elements', () => {
    render(
      <ProductCard
        name="Oatly Haferdrink Barista Edition"
        description="Haferdrink Barista-Edition, 100% pflanzlich, perfekt zum Aufschäumen, ideal für Kaffee und Tee. Kein GMO."
      />
    )

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()

    const header = screen.getByRole('heading')
    expect(header).toBeInTheDocument()

    const description = screen.getByText(
      'Haferdrink Barista-Edition, 100% pflanzlich, perfekt zum Aufschäumen, ideal für Kaffee und Tee. Kein GMO.'
    )
    expect(description).toBeInTheDocument()
  })
})
