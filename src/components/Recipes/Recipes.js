import { useState } from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import { BiFoodMenu } from 'react-icons/bi'
import styled from 'styled-components/macro'

function Recipes({ recipeData }) {
  const [showDetails, setShowDetails] = useState(false)

  function handleDetailsButtonClick() {
    setShowDetails(!showDetails)
  }

  return (
    <Wrapper>
      <Heading>
        <StyledBiFoodMenu /> Recipes
      </Heading>
      <CardList>
        {recipeData.map(recipe => (
          <RecipeCard
            name={recipe.name}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            image={recipe.image}
            id={recipe.id}
            links={recipe.links}
            key={recipe.id}
            onDetailsButtonClick={handleDetailsButtonClick}
            showDetails={showDetails}
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

export default Recipes
