import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

function CustomLink({ path, name, icon }) {
  return (
    <StyledLink to={path}>
      {icon}
      {name}
    </StyledLink>
  )
}
const StyledLink = styled(Link)`
  font-size: large;
  text-decoration: none;
`

export default CustomLink
