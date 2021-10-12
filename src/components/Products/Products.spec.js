import { render, screen } from '@testing-library/react'
import Products from './Products'

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

describe('Products', () => {
  it('renders CardList element', () => {
    render(<Products productData={exampleData} />)

    const products = screen.getByRole('list')
    expect(products).toBeInTheDocument()
  })
})
