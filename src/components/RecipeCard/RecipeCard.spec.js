import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router-dom'
import RecipeCard from './RecipeCard'

describe('RecipeCard', () => {
  it('renders recipe card elements', () => {
    render(
      <Router>
        <RecipeCard
          name="Vegan Yoghurt Sauce"
          ingredients={['125g vegan yoghurt', '1 tbsp extra virgin olive oil']}
          instructions="Mix all the ingredients in a bowl. Keep in the fridge for at least 30 minutes."
          id="1"
        />
      </Router>
    )

    const image = screen.getByAltText('')
    expect(image).toBeInTheDocument()

    const header = screen.getByRole('heading', { level: 2 })
    expect(header).toBeInTheDocument()

    const ingredientsHeader = screen.getByText('Zutaten')
    expect(ingredientsHeader).toBeInTheDocument()

    const headers = screen.getAllByRole('heading')
    expect(headers).toHaveLength(2)

    const ingredient1 = screen.getByText('125g vegan yoghurt')
    expect(ingredient1).toBeInTheDocument()

    const ingredient2 = screen.getByText('1 tbsp extra virgin olive oil')
    expect(ingredient2).toBeInTheDocument()

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('shows instructions and a link after the button was clicked', () => {
    render(
      <Router>
        <RecipeCard
          name="Vegan Yoghurt Sauce"
          ingredients={['125g vegan yoghurt', '1 tbsp extra virgin olive oil']}
          instructions="Mix all the ingredients in a bowl. Keep in the fridge for at least 30 minutes."
          id="1"
          links={[
            {
              name: 'Joghurt',
              path: '/product-details/2',
            },
          ]}
        />
      </Router>
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    let instructionsHeader = screen.queryByText('Zubereitung')
    expect(instructionsHeader).not.toBeInTheDocument()

    let instructions = screen.queryByText(
      'Mix all the ingredients in a bowl. Keep in the fridge for at least 30 minutes.'
    )
    expect(instructions).not.toBeInTheDocument()

    let link = screen.queryByRole('link')
    expect(link).not.toBeInTheDocument()

    let headers = screen.getAllByRole('heading')
    expect(headers).toHaveLength(2)

    userEvent.click(button)

    instructionsHeader = screen.getByText('Zubereitung')
    expect(instructionsHeader).toBeInTheDocument()

    instructions = screen.getByText(
      'Mix all the ingredients in a bowl. Keep in the fridge for at least 30 minutes.'
    )
    expect(instructions).toBeInTheDocument()

    link = screen.getByRole('link')
    expect(link).toBeInTheDocument()

    headers = screen.getAllByRole('heading')
    expect(headers).toHaveLength(3)
  })
})
