import { AiOutlineFileAdd, AiOutlineHome } from 'react-icons/ai'
import styled from 'styled-components/macro'
import CustomLink from '../CustomLink/CustomLink'
import ProductCard from '../ProductCard/ProductCard'

function Products({ productData }) {
  return (
    <>
      <Heading>
        <AiOutlineHome /> Products
      </Heading>
      <CustomLink
        path="/product-form"
        name="Add Item"
        icon={<AiOutlineFileAdd />}
      />
      <CardList>
        {productData.map(product => (
          <ProductCard
            name={product.name}
            description={product.description}
            image={product.image}
            id={product.id}
            key={product.name}
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

export default Products
