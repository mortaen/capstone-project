import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router-dom'
import RecipeCard from './RecipeCard'

describe('RecipeCard', () => {
  const mockOnDetailsButtonClick = jest.fn()

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

  it('calls a function when the button is clicked', () => {
    render(
      <Router>
        <RecipeCard
          name="Vegan Yoghurt Sauce"
          ingredients={['125g vegan yoghurt', '1 tbsp extra virgin olive oil']}
          instructions="Mix all the ingredients in a bowl. Keep in the fridge for at least 30 minutes."
          id="1"
          onDetailsButtonClick={mockOnDetailsButtonClick}
        />
      </Router>
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    userEvent.click(button)

    expect(mockOnDetailsButtonClick).toHaveBeenCalled()
  })

  it('shows instructions when showDetails is true', () => {
    render(
      <Router>
        <RecipeCard
          name="Vegan Yoghurt Sauce"
          ingredients={['125g vegan yoghurt', '1 tbsp extra virgin olive oil']}
          instructions="Mix all the ingredients in a bowl. Keep in the fridge for at least 30 minutes."
          id="1"
          showDetails={true}
        />
      </Router>
    )

    const instructionsHeader = screen.getByText('Zubereitung')
    expect(instructionsHeader).toBeInTheDocument()

    const instructions = screen.getByText(
      'Mix all the ingredients in a bowl. Keep in the fridge for at least 30 minutes.'
    )
    expect(instructions).toBeInTheDocument()

    const headers = screen.getAllByRole('heading')
    expect(headers).toHaveLength(3)
  })
})
