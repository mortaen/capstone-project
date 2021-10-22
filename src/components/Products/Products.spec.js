import { render, screen } from '@testing-library/react'
import Products from './Products'
import { MemoryRouter as Router } from 'react-router-dom'

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

const exampleFilterCategories = [
  'plant milk',
  'plant yoghurt',
  'meat alternative',
]

const exampleRatings = [
  {
    id: '1',
    rating: 4,
  },
]

describe('Products', () => {
  const mockOnCategoryClick = jest.fn()

  it('renders CardList and page title', () => {
    render(
      <Router>
        <Products
          shownData={exampleData}
          onCategoryClick={mockOnCategoryClick}
          filterCategories={exampleFilterCategories}
          ratings={exampleRatings}
        />
      </Router>
    )

    const products = screen.getByRole('list')
    expect(products).toBeInTheDocument()

    const filterButton = screen.getByRole('button', { name: 'show filters' })
    expect(filterButton).toBeInTheDocument()

    const showAllButton = screen.getByRole('button', { name: 'show all' })
    expect(showAllButton).toBeInTheDocument()

    const pageTitle = screen.getByText('Products')
    expect(pageTitle).toBeInTheDocument()
  })
})
