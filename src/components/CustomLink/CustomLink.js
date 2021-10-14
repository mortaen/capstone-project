import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

function CustomLink({ path, name, icon }) {
  return (
    <>
      {icon}
      <StyledLink to={path}>{name}</StyledLink>
    </>
  )
}
const StyledLink = styled(Link)`
  font-size: large;
`

export default CustomLink
