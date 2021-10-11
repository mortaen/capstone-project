import styled from 'styled-components/macro'

function ProductCard({ name, description, image }) {
  return (
    <Wrapper>
      <Image src={image} alt="" />
      <InfoWrapper>
        <h2>{name}</h2>
        <p>{description}</p>
      </InfoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: 'image info';
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 10px;
  padding: 1rem;
  margin: 10px;
`

const InfoWrapper = styled.div`
  grid-area: info;
`

const Image = styled.img`
  grid-area: image;
  width: 90%;
`

export default ProductCard
