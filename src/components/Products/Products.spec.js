import { render, screen } from '@testing-library/react'
import Products from './Products'
import { MemoryRouter as Router } from 'react-router-dom'

const exampleRatings = [
  {
    id: '1',
    rating: 4,
  },
]

const exampleData = [
  {
    name: 'Oatly Haferdrink Barista Edition',
    id: '1',
    description:
      'Haferdrink Barista-Edition, 100% pflanzlich, perfekt zum Aufschäumen, ideal für Kaffee und Tee. Kein GMO.',
    image: 'https://www.baristaproshop.com/images/big_prod3523.jpg',
    categories: ['plant milk'],
  },
]

describe('Products', () => {
  const mockOnCategoryClick = jest.fn()

  it('renders the page title, a link, two more icons and a list of products', () => {
    render(
      <Router>
        <Products productData={exampleData} ratings={exampleRatings} />
      </Router>
    )

    const products = screen.getByRole('list')
    expect(products).toBeInTheDocument()

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()

    const filterIcon = screen.getByLabelText('show filters')
    expect(filterIcon).toBeInTheDocument()

    const showAllIcon = screen.getByLabelText('show all')
    expect(showAllIcon).toBeInTheDocument()

    const pageTitle = screen.getByText('Products')
    expect(pageTitle).toBeInTheDocument()
  })
})
