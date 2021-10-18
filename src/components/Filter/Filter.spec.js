import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Filter from './Filter'

describe('Filter', () => {
  const mockOnCategoryClick = jest.fn()
  const exampleFilterCategories = [
    'plant milk',
    'plant yoghurt',
    'meat alternative',
  ]

  it('renders only a button on load', () => {
    render(
      <Filter activeCategory={''} filterCategories={exampleFilterCategories} />
    )

    const button = screen.getByLabelText('show filters')
    expect(button).toBeInTheDocument()

    const listItems = screen.queryAllByRole('listitem')
    expect(listItems).not.toHaveLength(3)
  })

  it('renders a list after clicking the button', () => {
    render(
      <Filter
        onCategoryClick={mockOnCategoryClick}
        activeCategory={''}
        filterCategories={exampleFilterCategories}
      />
    )

    const button = screen.getByLabelText('show filters')
    expect(button).toBeInTheDocument()
    userEvent.click(button)

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(3)
  })

  it('renders an additional list item when activeCategory is not an empty string', () => {
    render(
      <Filter
        onCategoryClick={mockOnCategoryClick}
        activeCategory={'plant milk'}
        filterCategories={exampleFilterCategories}
      />
    )

    const button = screen.getByLabelText('show filters')
    expect(button).toBeInTheDocument()
    userEvent.click(button)

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(4)
  })
})
