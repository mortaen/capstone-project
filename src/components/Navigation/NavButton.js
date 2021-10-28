import styled from 'styled-components/macro'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

function NavButton({ showNavigation, toggleNavigation }) {
  return (
    <IconContext.Provider value={{ color: '#1f2933', size: '20px' }}>
      <Button aria-label="toggle navigation menu" onClick={toggleNavigation}>
        {showNavigation ? <AiOutlineClose /> : <FaBars />}
      </Button>
    </IconContext.Provider>
  )
}

const Button = styled.button`
  position: fixed;
  top: 5px;
  right: 5px;
`

export default NavButton
