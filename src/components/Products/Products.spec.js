import { render, screen } from '@testing-library/react'
import Products from './Products'
import { MemoryRouter as Router } from 'react-router-dom'

const exampleData = [
  {
    name: 'Oatly Haferdrink Barista Edition',
    description:
      'Haferdrink Barista-Edition, 100% pflanzlich, perfekt zum Aufschäumen, ideal für Kaffee und Tee. Kein GMO.',
  },
  {
    name: 'Alpro Soja-Joghurt',
    description:
      'Die Alpro Soja-Joghurtalternative Natur Ungesüßt ist zuckerfrei und dank des milden Geschmacks vielseitig einsetzbar.',
  },
]

const exampleFilterCategories = [
  'plant milk',
  'plant yoghurt',
  'meat alternative',
]

describe('Products', () => {
  const mockOnCategoryClick = jest.fn()

  it('renders CardList element', () => {
    render(
      <Router>
        <Products
          shownData={exampleData}
          onCategoryClick={mockOnCategoryClick}
          filterCategories={exampleFilterCategories}
        />
      </Router>
    )

    const products = screen.getByRole('list')
    expect(products).toBeInTheDocument()
  })
})
