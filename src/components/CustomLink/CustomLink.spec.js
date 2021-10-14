import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { MemoryRouter as Router } from 'react-router-dom'
import CustomLink from './CustomLink'

describe('CustomLink', () => {
  it('renders a link', () => {
    render(
      <Router>
        <CustomLink
          path="/product-form"
          name="Add Item"
          icon={<AiOutlineFileAdd />}
        />
      </Router>
    )

    const link = screen.getByText('Add Item')
    expect(link).toBeInTheDocument()
  })
})
