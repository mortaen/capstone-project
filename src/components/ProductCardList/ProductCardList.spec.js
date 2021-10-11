import { render, screen } from '@testing-library/react'
import ProductCardList from './ProductCardList'

const exampleData = [
  {
    name: 'Oatly Haferdrink Barista Edition',
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
      Energie: '59 kcal',
      Fett: '3g',
      Kohlenhydrate: '6.5g',
      Ballaststoffe: '0.8g',
      Eiweiß: '1g',
    },
    stores: ['Rewe'],
    image: 'https://www.baristaproshop.com/images/big_prod3523.jpg',
    categories: ['plant milk'],
    price: '2.19',
  },
  {
    name: 'Alpro Soja-Joghurt',
    brand: 'Alpro',
    description:
      'Die Alpro Soja-Joghurtalternative Natur Ungesüßt ist zuckerfrei und dank des milden Geschmacks vielseitig einsetzbar.',
    ingredients: [
      'Wasser',
      'geschälte Sojabohnen',
      'Tricalciumcitrat',
      'Natriumcitrate',
      'Citronensäure',
      'Pektine',
      'natürliches Aroma',
      'Meersalz',
      'Antioxidationsmittel',
      'Joghurtkulturen',
      'Vitamin D2',
      'Vitamin B12',
    ],
    nutritionFacts: {
      Energie: '42 kcal',
      Fett: '2.3g',
      Kohlenhydrate: '0g',
      Ballaststoffe: '0.9g',
      Eiweiß: '4g',
    },
    stores: ['Rewe', 'Lidl'],
    image:
      'https://img.rewe-static.de/2708343/24930316_digital-image.png?output-quality=60&fit=inside|840:840&output-format=image/webp&background-color=ffffff',
    categories: ['plant yoghurt'],
    price: '1.69',
  },
  {
    name: 'Beflügel-Nuggets',
    brand: 'The Vegetarian Butcher',
    description: 'Vegane panierte Nuggets auf Sojabasis.',
    ingredients: [
      'Trinkwasser',
      'texturiertes Sojaeiweiss',
      'Mais',
      'Zucker',
      'Speisesalz',
      'Rapsöl',
      'Sonnenblumenöl',
      'Maismehl',
      'Reismehl',
      'Haferfaser',
      'modifizierte Stärke',
      'natürliche Aromen',
      'Methylcellulose',
      'Branntweinessig',
      'Stärke',
      'Citronensäure',
      'Natriumhydroxid',
      'Eisendiphosphat',
      'Vitamin B12',
    ],
    nutritionFacts: {
      Energie: '224 kcal',
      Fett: '11g',
      Kohlenhydrate: '19g',
      Ballaststoffe: '6.4g',
      Eiweiß: '9g',
    },
    stores: ['Rewe', 'Real'],
    image:
      'https://img.rewe-static.de/8403429/30699050_digital-image.png?output-quality=60&fit=inside|840:840&output-format=image/webp&background-color=ffffff',
    categories: ['meat alternative'],
    price: '2.99',
  },
]

describe('ProductCardList', () => {
  it('renders CardList element', () => {
    render(<ProductCardList productData={exampleData} />)

    const list = screen.getByRole('section')
    expect(list).toBeInTheDocument()
  })
})
