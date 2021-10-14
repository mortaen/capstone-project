import { AiOutlineFileAdd } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

function AddItemButton() {
  return (
    <Button>
      <AiOutlineFileAdd />
      <Link to="/product-form">Add Item</Link>
    </Button>
  )
}

const Button = styled.button`
  font-size: large;
`

export default AddItemButton
