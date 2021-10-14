import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NavButton from './NavButton'

describe('NavButton', () => {
  it('renders a button', () => {
    render(<NavButton />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls a function when button is clicked and navigation state is false', () => {
    const mockShowNavigation = jest.fn()

    render(
      <NavButton
        showNavigation={mockShowNavigation}
        navigation={false}
      ></NavButton>
    )

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(mockShowNavigation).toHaveBeenCalled()
  })

  it('calls a function when button is clicked and navigation state is true', () => {
    const mockShowNavigation = jest.fn()

    render(
      <NavButton
        showNavigation={mockShowNavigation}
        navigation={true}
      ></NavButton>
    )

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(mockShowNavigation).toHaveBeenCalled()
  })
})
