import { render, screen } from '@testing-library/react'
import DetailsPage from './DetailsPage'
import { MemoryRouter as Router } from 'react-router-dom'

describe('DetailsPage', () => {
  it('renders product elements', () => {
    render(
      <Router>
        <DetailsPage
          name="Oatly Haferdrink Barista Edition"
          id="1"
          brand="Oatly"
          description="Haferdrink Barista-Edition, 100% pflanzlich, perfekt zum Aufschäumen, ideal für Kaffee und Tee. Kein GMO."
          image="https://www.baristaproshop.com/images/big_prod3523.jpg"
          ingredients={[
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
          ]}
          nutritionFacts={{
            energy: '59 kcal',
            fats: '3g',
            carbohydrates: '6.5g',
            fiber: '0.8g',
            protein: '1g',
          }}
          stores={['Rewe']}
          categories={['plant milk']}
          price="2.19"
        />
      </Router>
    )

    const image = screen.getByAltText('')
    expect(image).toBeInTheDocument()

    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(5)

    const description = screen.getByText(
      'Haferdrink Barista-Edition, 100% pflanzlich, perfekt zum Aufschäumen, ideal für Kaffee und Tee. Kein GMO.'
    )
    expect(description).toBeInTheDocument()
  })
})
