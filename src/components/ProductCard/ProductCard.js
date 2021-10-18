import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

function ProductCard({ name, description, image, id }) {
  return (
    <StyledLink to={`/product-details/${id}`}>
      <Image src={image} alt="" />
      <InfoWrapper>
        <h2>{name}</h2>
        <p>{description}</p>
      </InfoWrapper>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: 'image info';
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 1rem;
  margin: 10px;
  text-decoration: none;
  color: inherit;
`

const InfoWrapper = styled.div`
  grid-area: info;
`

const Image = styled.img`
  grid-area: image;
  width: 90%;
`

export default ProductCard
