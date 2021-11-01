import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Review from '../Review/Review'

function ProductCard({ name, description, image, id, onAddRating, ratings }) {
  const history = useHistory()

  function goToDetails() {
    history.push(`/product-details/${id}`)
  }

  return (
    <Wrapper onClick={goToDetails}>
      <Image src={image} alt="" />
      <StyledReview id={id} onAddRating={onAddRating} ratings={ratings} />
      <InfoWrapper>
        <h2>{name}</h2>
        <p>{description}</p>
      </InfoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    'image info'
    'review info'
    '. info';
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 1rem;
  margin: 10px;
  text-decoration: none;
  color: inherit;
  background-color: white;
  max-height: 50vh;
  overflow: hidden;
`

const InfoWrapper = styled.div`
  grid-area: info;
`

const Image = styled.img`
  grid-area: image;
  width: 90%;
  padding-bottom: 1rem;
`

const StyledReview = styled(Review)`
  grid-area: review;
`

export default ProductCard
