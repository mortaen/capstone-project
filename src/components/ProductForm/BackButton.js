import { MdNavigateBefore } from 'react-icons/md'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

function BackButton() {
  return (
    <Button>
      <MdNavigateBefore />
      <Link to="/">Back to Products</Link>
    </Button>
  )
}

const Button = styled.button`
  font-size: large;
`

export default BackButton
