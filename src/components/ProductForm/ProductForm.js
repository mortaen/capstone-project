import { nanoid } from 'nanoid'
import { IconContext } from 'react-icons/lib'
import { MdNavigateBefore } from 'react-icons/md'
import styled from 'styled-components/macro'
import CustomLink from '../CustomLink/CustomLink'
import { AiOutlineForm } from 'react-icons/ai'

function ProductForm({ onAddProduct, onAddCategories }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const {
      productName,
      brand,
      imgUrl,
      description,
      stores,
      price,
      ingredients,
      energy,
      fats,
      carbohydrates,
      fiber,
      protein,
      categories,
    } = form.elements

    onAddProduct({
      productName: productName.value,
      brand: brand.value,
      imgUrl: imgUrl.value,
      description: description.value,
      stores: stores.value,
      price: price.value,
      ingredients: ingredients.value,
      energy: energy.value,
      fats: fats.value,
      carbohydrates: carbohydrates.value,
      fiber: fiber.value,
      protein: protein.value,
      categories: categories.value,
      id: nanoid(),
    })

    onAddCategories({ categories: categories.value })

    form.reset()
    productName.focus()
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#2f4858', size: '3rem' }}>
        <CustomLink path="/" name="" icon={<MdNavigateBefore />} />
      </IconContext.Provider>
      <Heading>
        <IconContext.Provider value={{ color: '#2f4858', size: '2rem' }}>
          <StyledAiOutlineForm />
        </IconContext.Provider>
        Add Product
      </Heading>
      <Form onSubmit={event => handleSubmit(event)}>
        <ScreenReaderOnlyLabel htmlFor="productName">
          Product Name
        </ScreenReaderOnlyLabel>
        <Input
          type="text"
          name="productName"
          placeholder="Enter product name.."
          required
        />

        <ScreenReaderOnlyLabel htmlFor="brand">Brand</ScreenReaderOnlyLabel>
        <Input
          type="text"
          name="brand"
          id="brand"
          placeholder="Specify brand.."
        />

        <ScreenReaderOnlyLabel htmlFor="imgUrl">
          Image Url
        </ScreenReaderOnlyLabel>
        <Input type="text" name="imgUrl" placeholder="Enter img url.." />

        <ScreenReaderOnlyLabel htmlFor="description">
          Description
        </ScreenReaderOnlyLabel>
        <Input
          type="text"
          name="description"
          placeholder="Describe the product.."
        />

        <ScreenReaderOnlyLabel htmlFor="stores">Stores</ScreenReaderOnlyLabel>
        <Input type="text" name="stores" placeholder="Where can you buy it?" />

        <ScreenReaderOnlyLabel htmlFor="price">Price</ScreenReaderOnlyLabel>
        <Input
          type="number"
          step="any"
          name="price"
          placeholder="Enter price here.."
        />

        <ScreenReaderOnlyLabel htmlFor="ingredients">
          Ingredients
        </ScreenReaderOnlyLabel>
        <Input
          type="text"
          name="ingredients"
          placeholder="Enter Ingredients here.."
        />

        <ScreenReaderOnlyLabel htmlFor="energy">
          Energy per 100g
        </ScreenReaderOnlyLabel>
        <Input type="text" name="energy" placeholder="Energy per 100g" />

        <ScreenReaderOnlyLabel htmlFor="fats">
          Fats per 100g
        </ScreenReaderOnlyLabel>
        <Input type="text" name="fats" placeholder="Fats per 100g" />

        <ScreenReaderOnlyLabel htmlFor="carbohydrates">
          Carbohydrates per 100g
        </ScreenReaderOnlyLabel>
        <Input
          type="text"
          name="carbohydrates"
          placeholder="Carbohydrates per 100g"
        />

        <ScreenReaderOnlyLabel htmlFor="fiber">
          Fiber per 100g
        </ScreenReaderOnlyLabel>
        <Input type="text" name="fiber" placeholder="Fiber per 100g" />

        <ScreenReaderOnlyLabel htmlFor="protein">
          Protein per 100g
        </ScreenReaderOnlyLabel>
        <Input type="text" name="protein" placeholder="Protein per 100g" />

        <ScreenReaderOnlyLabel htmlFor="categories">
          Categories
        </ScreenReaderOnlyLabel>
        <Input type="text" name="categories" placeholder="Enter categories.." />

        <Button>Submit</Button>
      </Form>
    </>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export default ProductForm
