import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router-dom'
import ProductForm from './ProductForm'

describe('ProductForm', () => {
  it('renders heading and form elements', () => {
    render(
      <Router>
        <ProductForm />
      </Router>
    )

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()

    const nameInput = screen.getByPlaceholderText('Enter product name..')
    expect(nameInput).toBeInTheDocument()

    const brandInput = screen.getByLabelText('Brand')
    expect(brandInput).toBeInTheDocument()

    const imageInput = screen.getByPlaceholderText('Enter img url..')
    expect(imageInput).toBeInTheDocument()

    const descriptionInput = screen.getByPlaceholderText(
      'Describe the product..'
    )
    expect(descriptionInput).toBeInTheDocument()

    const storesInput = screen.getByPlaceholderText('Where can you buy it?')
    expect(storesInput).toBeInTheDocument()

    const priceInput = screen.getByPlaceholderText('Enter price here..')
    expect(priceInput).toBeInTheDocument()

    const ingredientsInput = screen.getByPlaceholderText(
      'Enter Ingredients here..'
    )
    expect(ingredientsInput).toBeInTheDocument()

    const energyInput = screen.getByPlaceholderText('Energy per 100g')
    expect(energyInput).toBeInTheDocument()

    const fatsInput = screen.getByPlaceholderText('Fats per 100g')
    expect(fatsInput).toBeInTheDocument()

    const carbohydratesInput = screen.getByPlaceholderText(
      'Carbohydrates per 100g'
    )
    expect(carbohydratesInput).toBeInTheDocument()

    const fiberInput = screen.getByPlaceholderText('Fiber per 100g')
    expect(fiberInput).toBeInTheDocument()

    const proteinInput = screen.getByPlaceholderText('Protein per 100g')
    expect(proteinInput).toBeInTheDocument()

    const categoriesInput = screen.getByPlaceholderText('Enter categories..')
    expect(categoriesInput).toBeInTheDocument()

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    expect(submitButton).toBeInTheDocument()
  })

  it('calls two functions on submit', () => {
    const mockOnAddProduct = jest.fn()
    const mockOnAddCategories = jest.fn()
    render(
      <Router>
        <ProductForm
          onAddProduct={mockOnAddProduct}
          onAddCategories={mockOnAddCategories}
        />
      </Router>
    )

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    userEvent.click(submitButton)
    expect(mockOnAddProduct).toHaveBeenCalled()
    expect(mockOnAddCategories).toHaveBeenCalled()
  })
})
