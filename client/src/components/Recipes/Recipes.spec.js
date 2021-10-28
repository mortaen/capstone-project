import { render, screen } from '@testing-library/react'
import Recipes from './Recipes'

describe('Recipes', () => {
  const exampleRecipeData = [
    {
      name: 'Vegan Yoghurt Sauce',
      id: '1',
      ingredients: [
        '125g vegan yoghurt',
        '1 tbsp extra virgin olive oil',
        '2 tbsp lemon juice',
        '1 tsp fresh mint',
        '2 cloves of garlic',
        '1/2 teaspoon sea salt',
        'pepper',
      ],
      instructions:
        'Mix all the ingredients in a bowl. Keep in the fridge for at least 30 minutes.',
      image:
        'https://simpleveganblog.com/wp-content/uploads/2015/09/Vegan-yogurt-sauce.jpg',
    },
  ]

  it('renders the page title and a list of cards', () => {
    render(<Recipes recipeData={exampleRecipeData} />)

    const title = screen.getByText('Recipes')
    expect(title).toBeInTheDocument()

    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })
})
