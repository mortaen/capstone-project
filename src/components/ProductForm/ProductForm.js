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
        </IconContext.Provider>{' '}
        Add Products
      </Heading>
      <Form onSubmit={event => handleSubmit(event)}>
        <Label>
          <ScreenReaderOnly>Product Name</ScreenReaderOnly>
          <Input
            type="text"
            name="productName"
            placeholder="Enter product name.."
            required
          />
        </Label>

        <Label>
          <ScreenReaderOnly>Brand</ScreenReaderOnly>
          <Input
            type="text"
            name="brand"
            id="brand"
            placeholder="Specify brand.."
          />
        </Label>

        <Label>
          <ScreenReaderOnly>Image Url</ScreenReaderOnly>
          <Input type="text" name="imgUrl" placeholder="Enter img url.." />
        </Label>

        <Label>
          <ScreenReaderOnly>Description</ScreenReaderOnly>
          <Input
            type="text"
            name="description"
            placeholder="Describe the product.."
          />
        </Label>

        <Label>
          <ScreenReaderOnly>Stores</ScreenReaderOnly>
          <Input
            type="text"
            name="stores"
            placeholder="Where can you buy it?"
          />
        </Label>

        <Label>
          <ScreenReaderOnly>Price:</ScreenReaderOnly>
          <Input
            type="number"
            step="any"
            name="price"
            placeholder="Enter price here.."
          />
        </Label>
        <Label>
          <ScreenReaderOnly>Ingredients</ScreenReaderOnly>
          <Input
            type="text"
            name="ingredients"
            placeholder="Enter Ingredients here.."
          />
        </Label>
        <Label>
          <ScreenReaderOnly>Energy per 100g</ScreenReaderOnly>
          <Input type="text" name="energy" placeholder="Energy per 100g" />
        </Label>
        <Label>
          <ScreenReaderOnly>Fats per 100g</ScreenReaderOnly>
          <Input type="text" name="fats" placeholder="Fats per 100g" />
        </Label>
        <Label>
          <ScreenReaderOnly>Carbohydrates per 100g</ScreenReaderOnly>
          <Input
            type="text"
            name="carbohydrates"
            placeholder="Carbohydrates per 100g"
          />
        </Label>
        <Label>
          <ScreenReaderOnly>Fiber per 100g</ScreenReaderOnly>
          <Input type="text" name="fiber" placeholder="Fiber per 100g" />
        </Label>
        <Label>
          <ScreenReaderOnly>Protein per 100g</ScreenReaderOnly>
          <Input type="text" name="protein" placeholder="Protein per 100g" />
        </Label>
        <Label>
          <ScreenReaderOnly>Categories</ScreenReaderOnly>
          <Input
            type="text"
            name="categories"
            placeholder="Enter categories.."
          />
        </Label>
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

const Label = styled.label`
  width: 100%;
`

const Input = styled.input`
  width: 80%;
  min-height: 2rem;
  margin: 1rem 0 0 2rem;
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

const ScreenReaderOnly = styled.span`
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
