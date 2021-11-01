import styled from 'styled-components/macro'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

function NavButton({ showNavigation, toggleNavigation }) {
  return (
    <>
      <Button aria-label="toggle navigation menu" onClick={toggleNavigation}>
        {showNavigation ? (
          <IconContext.Provider value={{ color: '#fad0c4', size: '2rem' }}>
            <AiOutlineClose />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ color: '#2f4858', size: '2rem' }}>
            <FaBars />
          </IconContext.Provider>
        )}
      </Button>
    </>
  )
}

const Button = styled.button`
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
`

export default NavButton
