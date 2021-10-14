import styled from 'styled-components/macro'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

function NavButton({ showNavigation, navigation }) {
  return (
    <Button aria-label="toggle navigation menu" onClick={showNavigation}>
      {navigation ? <AiOutlineClose /> : <FaBars />}
    </Button>
  )
}

const Button = styled.button`
  position: fixed;
  top: 5px;
  right: 5px;
`

export default NavButton
