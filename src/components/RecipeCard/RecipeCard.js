import styled from 'styled-components/macro'

function RecipeCard({
  name,
  ingredients,
  instructions,
  image,
  onDetailsButtonClick,
  showDetails,
}) {
  return (
    <Wrapper>
      <Image src={image} alt="" />
      <InfoWrapper>
        <Heading>{name}</Heading>
        <Section>
          <Subheading>Zutaten</Subheading>
          {ingredients.map((ingredient, index) => (
            <Item key={index}>{ingredient}</Item>
          ))}
        </Section>
        {showDetails && <Subheading>Zubereitung</Subheading>}
        {showDetails && <Paragraph>{instructions}</Paragraph>}
      </InfoWrapper>
      <Button onClick={() => onDetailsButtonClick()}>
        Show {showDetails ? 'Less' : 'More'}
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    'image info'
    'review info'
    'button button';
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

const Heading = styled.h2``

const Subheading = styled.h3`
  grid-area: heading;
  margin: 0;
`

const Section = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    'heading heading'
    'items items';
  grid-gap: 5px;
  margin-bottom: 8px;
`

const Item = styled.span``

const Paragraph = styled.p`
  margin: 0;
`

const Button = styled.button`
  grid-area: button;
`

export default RecipeCard
