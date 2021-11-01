import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

function RecipeCard({ name, ingredients, instructions, image, links }) {
  const [showDetails, setShowDetails] = useState(false)

  function handleDetailsButtonClick() {
    setShowDetails(!showDetails)
  }

  return (
    <Wrapper>
      <Image src={image} alt="" />
      <InfoWrapper>
        <Heading>{name}</Heading>
        <Section>
          <Subheading>Zutaten</Subheading>
          {ingredients.map(ingredient => (
            <Item key={ingredient}>{ingredient}</Item>
          ))}
        </Section>
      </InfoWrapper>
      <DetailsWrapper>
        {showDetails && <Subheading>Zubereitung</Subheading>}
        {showDetails && <Paragraph>{instructions}</Paragraph>}
        {showDetails && (
          <Section>
            {links &&
              links.map(link => (
                <StyledLink key={link.path} to={link.path}>
                  {link.name}
                </StyledLink>
              ))}
          </Section>
        )}
      </DetailsWrapper>
      <Button onClick={() => handleDetailsButtonClick()}>
        show {showDetails ? 'less' : 'more'}
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    'image info'
    '. info'
    'instructions instructions'
    'button button';
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.6rem;
  padding: 1rem;
  margin: 0.6rem;
  text-decoration: none;
  color: inherit;

  background-color: white;
`

const InfoWrapper = styled.div`
  grid-area: info;
`

const DetailsWrapper = styled.div`
  grid-area: instructions;
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
  grid-template-areas:
    'heading'
    'items';
  grid-gap: 5px;
  margin-bottom: 8px;
`

const StyledLink = styled(Link)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 0.5rem;
  background-image: linear-gradient(
    45deg,
    #ff9a9e 0%,
    #fad0c4 99%,
    #fad0c4 100%
  );
  text-align: center;
  width: fit-content;
`

const Item = styled.span``

const Paragraph = styled.p`
  margin: 0;
  padding: 0.5rem 0;
`

const Button = styled.button`
  grid-area: button;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-image: linear-gradient(
    45deg,
    #ff9a9e 0%,
    #fad0c4 99%,
    #fad0c4 100%
  );
  color: #2f4858;
  width: fit-content;
  justify-self: center;
`

export default RecipeCard
