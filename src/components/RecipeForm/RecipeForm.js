import { nanoid } from 'nanoid'
import { IconContext } from 'react-icons/lib'
import { MdNavigateBefore } from 'react-icons/md'
import styled from 'styled-components/macro'
import CustomLink from '../CustomLink/CustomLink'
import { AiOutlineForm } from 'react-icons/ai'
import { useEffect } from 'react'

function RecipeForm({ onAddRecipe }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { recipeName, instructions, ingredients, imgUrl } = form.elements

    onAddRecipe({
      recipeName: recipeName.value,
      instructions: instructions.value,
      ingredients: ingredients.value,
      imgUrl: imgUrl.value,
      id: nanoid(),
    })

    form.reset()
    recipeName.focus()
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#2f4858', size: '3rem' }}>
        <CustomLink path="/recipes" name="" icon={<MdNavigateBefore />} />
      </IconContext.Provider>
      <Heading>
        <IconContext.Provider value={{ color: '#2f4858', size: '2rem' }}>
          <StyledAiOutlineForm />
        </IconContext.Provider>
        Add Recipe
      </Heading>
      <Form onSubmit={handleSubmit}>
        <ScreenReaderOnlyLabel htmlFor="recipeName">
          Recipe Name
        </ScreenReaderOnlyLabel>
        <Input
          type="text"
          name="recipeName"
          id="recipeName"
          placeholder="Enter recipe name.."
          required
        />

        <ScreenReaderOnlyLabel htmlFor="instructions">
          Instructions
        </ScreenReaderOnlyLabel>
        <Input
          type="text"
          name="instructions"
          id="instructions"
          placeholder="Enter instructions.."
        />

        <ScreenReaderOnlyLabel htmlFor="ingredients">
          Ingredients
        </ScreenReaderOnlyLabel>
        <Input
          type="text"
          name="ingredients"
          id="ingredients"
          placeholder="Enter ingredients.."
        />

        <ScreenReaderOnlyLabel htmlFor="imgUrl">
          Image Url
        </ScreenReaderOnlyLabel>
        <Input
          type="text"
          name="imgUrl"
          id="imgUrl"
          placeholder="Enter img url.."
        />

        <Button>Submit</Button>
      </Form>
    </>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

const Input = styled.input`
  width: 80%;
  min-height: 2rem;
  margin-top: 1rem;
  border-radius: 0.3rem;
`

const Heading = styled.h2`
  text-align: center;
  color: #2f4858;
  font-size: 2rem;
  margin: 0;
`

const Button = styled.button`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-image: linear-gradient(
    45deg,
    #ff9a9e 0%,
    #fad0c4 99%,
    #fad0c4 100%
  );
  width: fit-content;
  justify-self: center;
  margin-top: 1rem;
`

const StyledAiOutlineForm = styled(AiOutlineForm)`
  display: inline-flex;
  vertical-align: -8%;
`

const ScreenReaderOnlyLabel = styled.label`
  display: inline-block;
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
`

export default RecipeForm
