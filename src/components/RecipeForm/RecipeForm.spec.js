import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router-dom'
import RecipeForm from './RecipeForm'

describe('RecipeForm', () => {
  it('renders heading and form elements', () => {
    render(
      <Router>
        <RecipeForm />
      </Router>
    )

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()

    const nameInput = screen.getByPlaceholderText('Enter recipe name..')
    expect(nameInput).toBeInTheDocument()

    const instructionsInput = screen.getByPlaceholderText(
      'Enter instructions..'
    )
    expect(instructionsInput).toBeInTheDocument()

    const ingredientsInput = screen.getByPlaceholderText(
      'Enter Ingredients here..'
    )
    expect(ingredientsInput).toBeInTheDocument()

    const imageInput = screen.getByPlaceholderText('Enter img url..')
    expect(imageInput).toBeInTheDocument()

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    expect(submitButton).toBeInTheDocument()
  })

  it('calls a function on submit', () => {
    const mockOnAddRecipe = jest.fn()
    render(
      <Router>
        <RecipeForm onAddRecipe={mockOnAddRecipe} />
      </Router>
    )

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    userEvent.click(submitButton)
    expect(mockOnAddRecipe).toHaveBeenCalled()
  })
})
