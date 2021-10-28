import { nanoid } from 'nanoid'
import { IconContext } from 'react-icons/lib'
import { MdNavigateBefore } from 'react-icons/md'
import styled from 'styled-components/macro'
import CustomLink from '../CustomLink/CustomLink'

function ProductForm({ onAddProduct, onAddCategories }) {
  return (
    <>
      <IconContext.Provider value={{ color: '#1f2933', size: '40px' }}>
        <CustomLink path="/" name="" icon={<MdNavigateBefore />} />
      </IconContext.Provider>
      <Heading>Add your product</Heading>
      <Form onSubmit={event => handleSubmit(event)}>
        <Label>
          <ScreenReaderOnly>Product Name:</ScreenReaderOnly>
          <input
            type="text"
            name="productName"
            placeholder="Enter product name.."
            required
          />
        </Label>

        <Label>
          <ScreenReaderOnly>Brand:</ScreenReaderOnly>
          <input
            type="text"
            name="brand"
            id="brand"
            placeholder="Specify brand.."
          />
        </Label>

        <Label>
          <ScreenReaderOnly>Image Url:</ScreenReaderOnly>
          <input type="text" name="imgUrl" placeholder="Enter img url.." />
        </Label>

        <Label>
          <ScreenReaderOnly>Description:</ScreenReaderOnly>
          <input
            type="text"
            name="description"
            placeholder="Describe the product.."
          />
        </Label>

        <Label>
          <ScreenReaderOnly>Stores:</ScreenReaderOnly>
          <input
            type="text"
            name="stores"
            placeholder="Where can you buy it?"
          />
        </Label>

        <Label>
          Price:
          <input type="number" step="any" name="price" />
        </Label>
        <Label>
          Ingredients:
          <input type="text" name="ingredients" />
        </Label>
        <Label>
          Energy per 100g
          <input type="text" name="energy" />
        </Label>
        <Label>
          Fats per 100g
          <input type="text" name="fats" />
        </Label>
        <Label>
          Carbohydrates per 100g
          <input type="text" name="carbohydrates" />
        </Label>
        <Label>
          Fiber per 100g
          <input type="text" name="fiber" />
        </Label>
        <Label>
          Protein per 100g
          <input type="text" name="protein" />
        </Label>
        <Label>
          <ScreenReaderOnly>Categories:</ScreenReaderOnly>
          <input
            type="text"
            name="categories"
            placeholder="Enter categories.."
          />
        </Label>
        <button>Submit</button>
      </Form>
    </>
  )

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
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Label = styled.label`
  width: 90%;
`

const Heading = styled.h2`
  text-align: center;
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
