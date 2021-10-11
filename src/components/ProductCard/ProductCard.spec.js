import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'

describe('ProductCard', () => {
  it('renders product card elements', () => {
    render(<ProductCard name="productname" description="product description" />)

    const image = screen.getByAltText('productname image')
    expect(image).toBeInTheDocument()

    const header = screen.getByText('productname')
    expect(header).toBeInTheDocument()

    const description = screen.getByText('product description')
    expect(description).toBeInTheDocument()
  })
})
