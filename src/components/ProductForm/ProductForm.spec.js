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

    const nameInput = screen.getByLabelText('Product Name:')
    expect(nameInput).toBeInTheDocument()

    const brandInput = screen.getByLabelText('Brand:')
    expect(brandInput).toBeInTheDocument()

    const imageInput = screen.getByLabelText('Image Url:')
    expect(imageInput).toBeInTheDocument()

    const descriptionInput = screen.getByLabelText('Description:')
    expect(descriptionInput).toBeInTheDocument()

    const storesInput = screen.getByLabelText('Stores:')
    expect(storesInput).toBeInTheDocument()

    const priceInput = screen.getByLabelText('Price:')
    expect(priceInput).toBeInTheDocument()

    const ingredientsInput = screen.getByLabelText('Ingredients:')
    expect(ingredientsInput).toBeInTheDocument()

    const energyInput = screen.getByLabelText('Energy per 100g')
    expect(energyInput).toBeInTheDocument()

    const fatsInput = screen.getByLabelText('Fats per 100g')
    expect(fatsInput).toBeInTheDocument()

    const carbohydratesInput = screen.getByLabelText('Carbohydrates per 100g')
    expect(carbohydratesInput).toBeInTheDocument()

    const fiberInput = screen.getByLabelText('Fiber per 100g')
    expect(fiberInput).toBeInTheDocument()

    const proteinInput = screen.getByLabelText('Protein per 100g')
    expect(proteinInput).toBeInTheDocument()

    const categoriesInput = screen.getByLabelText('Categories:')
    expect(categoriesInput).toBeInTheDocument()

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    expect(submitButton).toBeInTheDocument()

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })

  it('calls function on submit', () => {
    const mockOnAddProduct = jest.fn()
    render(
      <Router>
        <ProductForm onAddProduct={mockOnAddProduct} />
      </Router>
    )

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    userEvent.click(submitButton)
    expect(mockOnAddProduct).toHaveBeenCalled()
  })
})
