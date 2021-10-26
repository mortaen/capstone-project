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
    <>
      <Heading>
        <BiFoodMenu /> Recipes
      </Heading>
      <CardList>
        {recipeData.map(recipe => (
          <RecipeCard
            name={recipe.name}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            image={recipe.image}
            id={recipe.id}
            key={recipe.id}
            onDetailsButtonClick={handleDetailsButtonClick}
            showDetails={showDetails}
          />
        ))}
      </CardList>
    </>
  )
}

const CardList = styled.ul`
  display: grid;
  grid-template-columns: 100%;
  padding: 0;
`

const Heading = styled.h2`
  text-align: center;
`

export default Recipes
