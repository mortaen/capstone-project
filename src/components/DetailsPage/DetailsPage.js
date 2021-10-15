import { MdNavigateBefore } from 'react-icons/md'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import CustomLink from '../CustomLink/CustomLink'

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
  id,
}) {
  return (
    <>
      <Link to={`/product-details/${id}`} />
      <Heading>{name}</Heading>
      <Image src={image} alt="" />
      <Description>{description}</Description>
      <Section>
        <Item>Marke: {brand}</Item> <Item>Preis: {price}€</Item>
      </Section>

      <Section>
        <Subheading>Zutaten</Subheading>
        {ingredients.map(ingredient => (
          <Item>{ingredient}</Item>
        ))}
      </Section>

      <Section>
        <Subheading>Nährwerte</Subheading>
        <Item>Energie: {nutritionFacts.energy}</Item>
        <Item>Fette: {nutritionFacts.fats}</Item>
        <Item>Kohlenhydrate: {nutritionFacts.carbohydrates}</Item>
        <Item>Protein: {nutritionFacts.protein}</Item>
        <Item>Ballaststoffe: {nutritionFacts.fiber}</Item>
        <Item>Proteine: {nutritionFacts.protein}</Item>
      </Section>

      <Section>
        <Subheading>Läden</Subheading>
        {stores.map(store => (
          <Item>{store}</Item>
        ))}
      </Section>

      <Section>
        <Subheading>Kategorien</Subheading>
        {categories.map(category => (
          <Item>{category}</Item>
        ))}
      </Section>
      <CustomLink
        path="/"
        name="Back to Products"
        icon={<MdNavigateBefore />}
      />
    </>
  )
}

const Heading = styled.h2`
  text-align: center;
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
  grid-gap: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 1rem;
  margin: 10px;
`

const Description = styled.p`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 1rem;
  margin: 10px;
`

const Item = styled.span``

export default DetailsPage
