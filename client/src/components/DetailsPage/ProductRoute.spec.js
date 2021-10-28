import { render, screen } from '@testing-library/react'
import ProductRoute from './ProductRoute'

const productData = [
  {
    name: 'Oatly Haferdrink Barista Edition',
    id: '1',
    brand: 'Oatly',
    description:
      'Haferdrink Barista-Edition, 100% pflanzlich, perfekt zum Aufschäumen, ideal für Kaffee und Tee. Kein GMO.',
    ingredients: [
      'Wasser',
      'Hafer',
      'Rapsöl',
      'Dikaliumphosphat',
      'Calciumcarbonat',
      'Kaliumiodid',
      'Salz',
      'Vitamin D2',
      'Riboflavin',
      'Vitamin B12',
    ],
    nutritionFacts: {
      energy: '59 kcal',
      fats: '3g',
      carbohydrates: '6.5g',
      fiber: '0.8g',
      protein: '1g',
    },
    stores: ['Rewe'],
    image: 'https://www.baristaproshop.com/images/big_prod3523.jpg',
    categories: ['plant milk'],
    price: '2.19',
  },
]

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '33',
  }),
  useRouteMatch: () => ({ url: '/product-details/33' }),
}))

describe('ProductRoute', () => {
  it('renders a single div when id does not match any product id', () => {
    render(<ProductRoute productData={productData} />)

    const div = screen.getByText('PRODUCT NOT FOUND: 33')
    expect(div).toBeInTheDocument()
  })
})
