import styled from 'styled-components/macro'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

function NavButton({ showNavigation, navigation }) {
  return (
    <IconContext.Provider value={{ color: 'darkgrey', size: '33px' }}>
      <Button aria-label="toggle navigation menu" onClick={showNavigation}>
        {navigation ? <AiOutlineClose /> : <FaBars />}
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
