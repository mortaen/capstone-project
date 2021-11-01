import { render, screen } from '@testing-library/react'
import Filter from './Filter'

describe('Filter', () => {
  const exampleProductCategories = [
    'plant milk',
    'plant yoghurt',
    'meat alternative',
  ]

  it('does not render when showFilters is false', () => {
    render(
      <Filter
        showFilters={false}
        activeCategory={''}
        productCategories={exampleProductCategories}
      />
    )

    const listItems = screen.queryAllByRole('listitem')
    expect(listItems).not.toHaveLength(3)
  })

  it('renders a list when showFilters is true', () => {
    render(
      <Filter
        showFilters={true}
        activeCategory={''}
        productCategories={exampleProductCategories}
      />
    )

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(3)
  })
})
