import styled from 'styled-components/macro'
import ProductCard from '../ProductCard/ProductCard'

function Products({ productData }) {
  return (
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
  )
}

const CardList = styled.ul`
  display: grid;
  grid-template-columns: 100%;
  padding: 0;
`

export default Products
