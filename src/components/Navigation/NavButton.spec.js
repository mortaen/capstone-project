import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NavButton from './NavButton'

describe('NavButton', () => {
  it('renders a button', () => {
    render(<NavButton />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls a function when button is clicked and showNavigation state is false', () => {
    const mockToggleNavigation = jest.fn()

    render(
      <NavButton
        toggleNavigation={mockToggleNavigation}
        showNavigation={false}
      />
    )

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(mockToggleNavigation).toHaveBeenCalled()
  })

  it('calls a function when button is clicked and showNavigation state is true', () => {
    const mockShowNavigation = jest.fn()

    render(
      <NavButton toggleNavigation={mockShowNavigation} showNavigation={true} />
    )

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(mockShowNavigation).toHaveBeenCalled()
  })
})
