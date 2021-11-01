import RecipeCard from '../RecipeCard/RecipeCard'
import styled from 'styled-components/macro'
import CustomLink from '../CustomLink/CustomLink'
import { IconContext } from 'react-icons/lib'
import { MdAdd } from 'react-icons/md'
import { BiFoodMenu } from 'react-icons/bi'

function Recipes({ recipeData }) {
  return (
    <Wrapper>
      <Heading>
        <StyledBiFoodMenu /> Recipes
      </Heading>
      <CardList>
        <Section>
          <IconContext.Provider value={{ color: '#fad0c4', size: '2rem' }}>
            <CustomLink
              path="/recipe-form"
              aria-label="add item"
              icon={<MdAdd />}
            />
          </IconContext.Provider>
        </Section>
        {recipeData.map(recipe => (
          <RecipeCard
            name={recipe.name}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            image={recipe.image}
            id={recipe.id}
            links={recipe.links}
            key={recipe.id}
          />
        ))}
      </CardList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const CardList = styled.ul`
  display: grid;
  grid-template-columns: 100%;
  padding: 0;
`

const Heading = styled.h2`
  text-align: center;
  color: #2f4858;
  font-size: 2rem;
  margin-bottom: 0;
`

const StyledBiFoodMenu = styled(BiFoodMenu)`
  display: inline-flex;
  vertical-align: -8%;
`

const Section = styled.section`
  background-color: #2f4858;
  display: flex;
  justify-content: space-around;
`

export default Recipes
