import { IconContext } from 'react-icons/lib'
import { MdNavigateBefore } from 'react-icons/md'
import styled from 'styled-components/macro'
import CustomLink from '../CustomLink/CustomLink'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

function DetailsPage({
  name,
  image,
  brand,
  description,
  ingredients,
  nutritionFacts,
  stores,
  categories,
  price,
}) {
  ScrollToTop()

  return (
    <>
      <IconContext.Provider value={{ color: '#2f4858', size: '3rem' }}>
        <CustomLink path="/" icon={<MdNavigateBefore />} />
      </IconContext.Provider>
      <Heading>{name}</Heading>
      <Image src={image} alt="" />
      <Description>{description}</Description>
      <Section>
        <Item>Marke: {brand}</Item> <Item>Preis: {price}€</Item>
      </Section>

      <Section>
        <Subheading>Zutaten</Subheading>
        {ingredients.map((ingredient, index) => (
          <Item key={index}>{ingredient}</Item>
        ))}
      </Section>

      <Section>
        <Subheading>Nährwerte</Subheading>
        <Item>Energie: {nutritionFacts.energy}</Item>
        <Item>Fette: {nutritionFacts.fats}</Item>
        <Item>Kohlenhydrate: {nutritionFacts.carbohydrates}</Item>
        <Item>Ballaststoffe: {nutritionFacts.fiber}</Item>
        <Item>Proteine: {nutritionFacts.protein}</Item>
      </Section>

      <Section>
        <Subheading>Läden</Subheading>
        {stores.map((store, index) => (
          <Item key={index}>{store}</Item>
        ))}
      </Section>

      <Section>
        <Subheading>Kategorien</Subheading>
        {categories.map((category, index) => (
          <Item key={index}>{category}</Item>
        ))}
      </Section>
    </>
  )
}

const Heading = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-top: 0;
  color: #2f4858;
`

const Subheading = styled.h3`
  text-align: center;
  grid-area: heading;
  margin: 0;
`

const Image = styled.img`
  width: 100%;
`

const Section = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    'heading heading'
    'items items';
  grid-gap: 0.4rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.6rem;
  padding: 1rem;
  margin: 0.6rem;
  background-color: white;
`

const Description = styled.p`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.6rem;
  padding: 1rem;
  margin: 0.6rem;
  background-color: white;
`

const Item = styled.span`
  overflow: auto;
`

export default DetailsPage
