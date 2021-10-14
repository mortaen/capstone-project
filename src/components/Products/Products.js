import { AiOutlineHome } from 'react-icons/ai'
import styled from 'styled-components/macro'
import ProductCard from '../ProductCard/ProductCard'
import AddItemButton from './AddItemButton'

function Products({ productData }) {
  return (
    <>
      <Heading>
        <AiOutlineHome /> Products
      </Heading>
      <AddItemButton />
      <CardList>
        {productData.map(product => (
          <ProductCard
            name={product.name}
            description={product.description}
            image={product.image}
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
